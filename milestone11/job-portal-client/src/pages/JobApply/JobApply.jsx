import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    
    const [jobDetails, setJobDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.displayName || '',
        email: user?.email || '',
        phone: '',
        address: '',
        education: '',
        experience: '',
        skills: '',
        githubUrl: '',
        linkedinUrl: '',
        portfolioUrl: '',
        coverLetter: '',
        expectedSalary: '',
        availableFrom: '',
        resume: null
    });

    // Fetch job details
    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/jobs/${jobId}`);
                setJobDetails(response.data);
            } catch (error) {
                console.error('Error fetching job details:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to load job details',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        };

        if (jobId) {
            fetchJobDetails();
        }
    }, [jobId]);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        
        if (type === 'file') {
            setFormData(prev => ({
                ...prev,
                [name]: files[0]
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    // Validate form
    const validateForm = () => {
        const requiredFields = [
            'name', 'email', 'phone', 'address', 'education', 
            'experience', 'skills', 'githubUrl', 'linkedinUrl', 'coverLetter'
        ];

        for (let field of requiredFields) {
            if (!formData[field].trim()) {
                Swal.fire({
                    title: 'Validation Error!',
                    text: `Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field`,
                    icon: 'warning',
                    confirmButtonText: 'OK'
                });
                return false;
            }
        }

        // Validate GitHub URL
        if (!formData.githubUrl.includes('github.com')) {
            Swal.fire({
                title: 'Invalid GitHub URL!',
                text: 'Please provide a valid GitHub profile URL',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return false;
        }

        // Validate LinkedIn URL
        if (!formData.linkedinUrl.includes('linkedin.com')) {
            Swal.fire({
                title: 'Invalid LinkedIn URL!',
                text: 'Please provide a valid LinkedIn profile URL',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            Swal.fire({
                title: 'Invalid Email!',
                text: 'Please provide a valid email address',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return false;
        }

        return true;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        // Show confirmation dialog
        const result = await Swal.fire({
            title: 'Confirm Application',
            text: 'Are you sure you want to submit your job application?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Submit!'
        });

        if (!result.isConfirmed) return;

        setLoading(true);

        try {
            // Create FormData for file upload
            const submitData = new FormData();
            
            // Add all form fields
            Object.keys(formData).forEach(key => {
                if (formData[key] !== null) {
                    submitData.append(key, formData[key]);
                }
            });

            // Add additional info
            submitData.append('jobId', jobId);
            submitData.append('userId', user?.uid || user?.id);
            submitData.append('appliedAt', new Date().toISOString());
            submitData.append('status', 'pending');

            // Submit to backend
            const response = await axios.post('http://localhost:3000/applications', submitData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201 || response.status === 200) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your job application has been submitted successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate('/my-applications'); // Redirect to applications page
                });
            }

        } catch (error) {
            console.error('Error submitting application:', error);
            
            let errorMessage = 'Failed to submit your application. Please try again.';
            
            if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }

            Swal.fire({
                title: 'Error!',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Authentication Required</h2>
                    <p>Please login to apply for jobs.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                {/* Job Details Section */}
                {jobDetails && (
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Apply for: {jobDetails.title}</h1>
                        <p className="text-gray-600 mb-2">Company: {jobDetails.company}</p>
                        <p className="text-gray-600 mb-4">Location: {jobDetails.location}</p>
                        <p className="text-gray-700">{jobDetails.description}</p>
                    </div>
                )}

                {/* Application Form */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Job Application Form</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Email Address *
  </label>
  <input
    type="email"
    name="email"
    value={formData.email}
    readOnly // makes the input non-editable
    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed focus:outline-none"
    placeholder="Enter your email"
    required
  />
</div>


                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Address *
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your address"
                                    required
                                />
                            </div>
                        </div>

                        {/* Professional Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Education *
                                </label>
                                <textarea
                                    name="education"
                                    value={formData.education}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Describe your educational background"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Work Experience *
                                </label>
                                <textarea
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Describe your work experience"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Skills *
                            </label>
                            <textarea
                                name="skills"
                                value={formData.skills}
                                onChange={handleInputChange}
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="List your relevant skills (separated by commas)"
                                required
                            />
                        </div>

                        {/* Links */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    GitHub Profile URL *
                                </label>
                                <input
                                    type="url"
                                    name="githubUrl"
                                    value={formData.githubUrl}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="https://github.com/yourusername"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    LinkedIn Profile URL *
                                </label>
                                <input
                                    type="url"
                                    name="linkedinUrl"
                                    value={formData.linkedinUrl}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="https://linkedin.com/in/yourusername"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Portfolio URL (Optional)
                            </label>
                            <input
                                type="url"
                                name="portfolioUrl"
                                value={formData.portfolioUrl}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="https://yourportfolio.com"
                            />
                        </div>

                        {/* Additional Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Expected Salary (Optional)
                                </label>
                                <input
                                    type="text"
                                    name="expectedSalary"
                                    value={formData.expectedSalary}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="e.g., $50,000 - $60,000"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Available From (Optional)
                                </label>
                                <input
                                    type="date"
                                    name="availableFrom"
                                    value={formData.availableFrom}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Cover Letter *
                            </label>
                            <textarea
                                name="coverLetter"
                                value={formData.coverLetter}
                                onChange={handleInputChange}
                                rows="5"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write a cover letter explaining why you're interested in this position..."
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Resume/CV (Optional)
                            </label>
                            <input
                                type="file"
                                name="resume"
                                onChange={handleInputChange}
                                accept=".pdf,.doc,.docx"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-8 py-3 rounded-md font-medium text-white ${
                                    loading 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                } transition duration-200`}
                            >
                                {loading ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;