import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../hooks/useAuth';
// import { useLocation, useNavigate } from 'react-router';
const MyApplications = () => {
    const { user } = useAuth();
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";


    useEffect(() => {
        fetchMyApplications();
    }, [user]);

    const fetchMyApplications = async () => {
        if (!user?.uid) return;
        
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:3000/applications/user/${user.uid}`);
            setApplications(response.data);
        } catch (error) {
            console.error('Error fetching applications:', error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status) => {
        const colors = {
            pending: 'bg-yellow-100 text-yellow-800',
            reviewed: 'bg-blue-100 text-blue-800',
            shortlisted: 'bg-green-100 text-green-800',
            interviewed: 'bg-purple-100 text-purple-800',
            rejected: 'bg-red-100 text-red-800',
            hired: 'bg-emerald-100 text-emerald-800'
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    const filteredApplications = applications.filter(app => {
        if (filter === 'all') return true;
        return app.status === filter;
    });

    if (!user) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl font-bold text-red-600">Please login to view your applications</h2>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading your applications...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">My Applications</h1>
                <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Filter by status:</span>
                    <select 
                        value={filter} 
                        onChange={(e) => setFilter(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All ({applications.length})</option>
                        <option value="pending">Pending</option>
                        <option value="reviewed">Reviewed</option>
                        <option value="shortlisted">Shortlisted</option>
                        <option value="interviewed">Interviewed</option>
                        <option value="rejected">Rejected</option>
                        <option value="hired">Hired</option>
                    </select>
                </div>
            </div>

            {filteredApplications.length === 0 ? (
                <div className="text-center py-12">
                    <div className="text-gray-400 text-6xl mb-4">📄</div>
                    <h3 className="text-xl font-medium text-gray-600 mb-2">
                        {filter === 'all' ? 'No applications found' : `No ${filter} applications`}
                    </h3>
                    <p className="text-gray-500">
                        {filter === 'all' 
                            ? "You haven't applied to any jobs yet. Start browsing jobs to apply!" 
                            : `You don't have any ${filter} applications.`
                        }
                    </p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {filteredApplications.map((application) => (
                        <div key={application._id} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {application.jobDetails?.[0]?.title || 'Job Title Not Available'}
                                    </h3>
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-medium">Company:</span> {application.jobDetails?.[0]?.company || 'N/A'}
                                    </p>
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-medium">Location:</span> {application.jobDetails?.[0]?.location || 'N/A'}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Applied on: {new Date(application.appliedAt).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                                <div className="ml-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                                        {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                                    </span>
                                </div>
                            </div>

                            <div className="border-t pt-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-gray-600">
                                            <span className="font-medium">Phone:</span> {application.phone}
                                        </p>
                                        <p className="text-gray-600">
                                            <span className="font-medium">Expected Salary:</span> {application.expectedSalary || 'Not specified'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">
                                            <span className="font-medium">Available From:</span> {
                                                application.availableFrom 
                                                    ? new Date(application.availableFrom).toLocaleDateString()
                                                    : 'Immediately'
                                            }
                                        </p>
                                        {application.resumeUrl && (
                                            <p className="text-gray-600">
                                                <span className="font-medium">Resume:</span> 
                                                <a 
                                                    href={`http://localhost:3000${application.resumeUrl}`} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:text-blue-800 ml-1"
                                                >
                                                    View Resume
                                                </a>
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <a 
                                        href={application.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-1 bg-gray-800 text-white text-sm rounded-md hover:bg-gray-700"
                                    >
                                        GitHub
                                    </a>
                                    <a 
                                        href={application.linkedinUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                                    >
                                        LinkedIn
                                    </a>
                                    {application.portfolioUrl && (
                                        <a 
                                            href={application.portfolioUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700"
                                        >
                                            Portfolio
                                        </a>
                                    )}
                                </div>

                                {application.coverLetter && (
                                    <div className="mt-4">
                                        <p className="font-medium text-gray-700 mb-2">Cover Letter:</p>
                                        <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded-md">
                                            {application.coverLetter.length > 200 
                                                ? `${application.coverLetter.substring(0, 200)}...` 
                                                : application.coverLetter
                                            }
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyApplications;