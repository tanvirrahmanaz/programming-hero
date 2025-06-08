const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const { ObjectId } = require('mongodb');

// Middleware
app.use(cors());
app.use(express.json());

// Create uploads directory if it doesn't exist
const uploadsDir = 'uploads';
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Create unique filename with timestamp
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    // Allow only specific file types
    if (file.fieldname === 'resume') {
        const allowedTypes = ['.pdf', '.doc', '.docx'];
        const fileExtension = path.extname(file.originalname).toLowerCase();
        
        if (allowedTypes.includes(fileExtension)) {
            cb(null, true);
        } else {
            cb(new Error('Only PDF, DOC, and DOCX files are allowed for resume'), false);
        }
    } else {
        cb(null, true);
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

// Serve static files from uploads directory
app.use('/uploads', express.static('uploads'));

const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Password}@cluster0.wvzeoy6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        const jobsCollection = client.db('jobs').collection('jobs');
        const applicationsCollection = client.db('jobs').collection('applications');

        // Jobs API
        app.get('/jobs', async (req, res) => {
            try {
                const cursor = jobsCollection.find();
                const result = await cursor.toArray();
                res.send(result);
            } catch (error) {
                console.error('Error fetching jobs:', error);
                res.status(500).send({ message: 'Failed to fetch jobs' });
            }
        });

        app.get('/jobs/:id', async (req, res) => {
            try {
                const id = req.params.id;
                
                // Validate ObjectId
                if (!ObjectId.isValid(id)) {
                    return res.status(400).send({ message: 'Invalid job ID' });
                }

                const query = { _id: new ObjectId(id) };
                const result = await jobsCollection.findOne(query);
                
                if (!result) {
                    return res.status(404).send({ message: 'Job not found' });
                }
                
                res.send(result);
            } catch (error) {
                console.error('Error fetching job:', error);
                res.status(500).send({ message: 'Failed to fetch job details' });
            }
        });

        // Job Application APIs
        
        // Submit new application - FIXED ENDPOINT (was /application, now /applications)
        app.post('/applications', upload.single('resume'), async (req, res) => {
            try {
                const applicationData = req.body;
                
                // Validate required fields
                const requiredFields = ['name', 'email', 'phone', 'address', 'education', 'experience', 'skills', 'githubUrl', 'linkedinUrl', 'coverLetter', 'jobId', 'userId'];
                
                for (let field of requiredFields) {
                    if (!applicationData[field]) {
                        return res.status(400).send({ 
                            message: `${field} is required` 
                        });
                    }
                }

                // Validate URLs
                if (!applicationData.githubUrl.includes('github.com')) {
                    return res.status(400).send({ 
                        message: 'Please provide a valid GitHub URL' 
                    });
                }

                if (!applicationData.linkedinUrl.includes('linkedin.com')) {
                    return res.status(400).send({ 
                        message: 'Please provide a valid LinkedIn URL' 
                    });
                }

                // Validate email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(applicationData.email)) {
                    return res.status(400).send({ 
                        message: 'Please provide a valid email address' 
                    });
                }

                // Check if job exists
                if (!ObjectId.isValid(applicationData.jobId)) {
                    return res.status(400).send({ message: 'Invalid job ID' });
                }

                const jobExists = await jobsCollection.findOne({ 
                    _id: new ObjectId(applicationData.jobId) 
                });
                
                if (!jobExists) {
                    return res.status(404).send({ message: 'Job not found' });
                }

                // Check if user already applied for this job
                const existingApplication = await applicationsCollection.findOne({
                    jobId: applicationData.jobId,
                    userId: applicationData.userId
                });

                if (existingApplication) {
                    return res.status(400).send({ 
                        message: 'You have already applied for this job' 
                    });
                }

                // Prepare application document
                const application = {
                    ...applicationData,
                    jobId: new ObjectId(applicationData.jobId), // Convert to ObjectId for better referencing
                    appliedAt: new Date(),
                    status: 'pending',
                    resumeUrl: req.file ? `/uploads/${req.file.filename}` : null,
                    resumeOriginalName: req.file ? req.file.originalname : null
                };

                // Insert application
                const result = await applicationsCollection.insertOne(application);
                
                if (result.insertedId) {
                    res.status(201).send({ 
                        message: 'Application submitted successfully!',
                        applicationId: result.insertedId 
                    });
                } else {
                    res.status(500).send({ message: 'Failed to submit application' });
                }

            } catch (error) {
                console.error('Error submitting application:', error);
                
                // Handle multer errors
                if (error.code === 'LIMIT_FILE_SIZE') {
                    return res.status(400).send({ 
                        message: 'File size too large. Maximum size is 5MB.' 
                    });
                }
                
                if (error.message.includes('Only PDF, DOC, and DOCX')) {
                    return res.status(400).send({ message: error.message });
                }

                res.status(500).send({ 
                    message: 'Failed to submit application. Please try again.' 
                });
            }
        });

        // Get applications for a specific user
        app.get('/applications/user/:userId', async (req, res) => {
            try {
                const userId = req.params.userId;
                const applications = await applicationsCollection.aggregate([
                    { $match: { userId: userId } },
                    {
                        $lookup: {
                            from: 'jobs',
                            localField: 'jobId',
                            foreignField: '_id',
                            as: 'jobDetails'
                        }
                    },
                    { $sort: { appliedAt: -1 } }
                ]).toArray();

                res.send(applications);
            } catch (error) {
                console.error('Error fetching user applications:', error);
                res.status(500).send({ message: 'Failed to fetch applications' });
            }
        });

        // Get all applications (for admin/HR)
        app.get('/applications', async (req, res) => {
            try {
                const { jobId, status, page = 1, limit = 10 } = req.query;
                
                let filter = {};
                if (jobId && ObjectId.isValid(jobId)) {
                    filter.jobId = new ObjectId(jobId);
                }
                if (status) {
                    filter.status = status;
                }

                const skip = (parseInt(page) - 1) * parseInt(limit);

                const applications = await applicationsCollection.aggregate([
                    { $match: filter },
                    {
                        $lookup: {
                            from: 'jobs',
                            localField: 'jobId',
                            foreignField: '_id',
                            as: 'jobDetails'
                        }
                    },
                    { $sort: { appliedAt: -1 } },
                    { $skip: skip },
                    { $limit: parseInt(limit) }
                ]).toArray();

                const total = await applicationsCollection.countDocuments(filter);

                res.send({
                    applications,
                    pagination: {
                        page: parseInt(page),
                        limit: parseInt(limit),
                        total,
                        pages: Math.ceil(total / parseInt(limit))
                    }
                });
            } catch (error) {
                console.error('Error fetching applications:', error);
                res.status(500).send({ message: 'Failed to fetch applications' });
            }
        });

        // Update application status
        app.patch('/applications/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const { status } = req.body;

                if (!ObjectId.isValid(id)) {
                    return res.status(400).send({ message: 'Invalid application ID' });
                }

                const validStatuses = ['pending', 'reviewed', 'shortlisted', 'interviewed', 'rejected', 'hired'];
                if (!validStatuses.includes(status)) {
                    return res.status(400).send({ 
                        message: 'Invalid status. Valid statuses are: ' + validStatuses.join(', ') 
                    });
                }

                const result = await applicationsCollection.updateOne(
                    { _id: new ObjectId(id) },
                    { 
                        $set: { 
                            status: status,
                            updatedAt: new Date()
                        } 
                    }
                );

                if (result.matchedCount === 0) {
                    return res.status(404).send({ message: 'Application not found' });
                }

                res.send({ message: 'Application status updated successfully' });
            } catch (error) {
                console.error('Error updating application:', error);
                res.status(500).send({ message: 'Failed to update application' });
            }
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

run().catch(console.dir);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong!' });
});

app.get('/', (req, res) => {
    res.send("Career Code Cooking - Job Portal API");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});