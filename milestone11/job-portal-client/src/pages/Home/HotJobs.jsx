import React, { useState } from 'react';
import { use } from 'react';

const HotJobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
    const [visibleJobs, setVisibleJobs] = useState(6);
    
    const handleApplyNow = (jobId) => {
        // Navigation to job details page
        window.location.href = `/jobs/${jobId}`;
    };

    const handleSeeMore = () => {
        setVisibleJobs(prev => prev + 3);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">🔥 Hot Jobs</h2>
                <p className="text-xl text-gray-600">Discover amazing opportunities waiting for you</p>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobs.slice(0, visibleJobs).map((job) => (
                    <div 
                        key={job.id} 
                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden group"
                    >
                        {/* Header with company logo and status badge */}
                        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center overflow-hidden">
                                    {job.company_logo ? (
                                        <img 
                                            src={job.company_logo} 
                                            alt={job.company}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-2xl font-bold text-blue-600">
                                            {job.company.charAt(0)}
                                        </span>
                                    )}
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                    job.status === 'active' 
                                        ? 'bg-green-500 text-white animate-pulse' 
                                        : 'bg-gray-500 text-white'
                                }`}>
                                    {job.status === 'active' ? '🔥 ACTIVE' : '⏸️ INACTIVE'}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {job.title}
                            </h3>
                            <p className="text-blue-600 font-semibold">{job.company}</p>
                        </div>

                        {/* Job details */}
                        <div className="p-6">
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center text-gray-600">
                                    <span className="w-5 h-5 mr-3">📍</span>
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <span className="w-5 h-5 mr-3">💰</span>
                                    <span className="font-semibold text-green-600">
                                        {job.salaryRange.min.toLocaleString()} - {job.salaryRange.max.toLocaleString()} {job.salaryRange.currency.toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <span className="w-5 h-5 mr-3">💼</span>
                                    <span>{job.jobType}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <span className="w-5 h-5 mr-3">🏢</span>
                                    <span>{job.category}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <span className="w-5 h-5 mr-3">📅</span>
                                    <span>Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}</span>
                                </div>
                            </div>

                            {/* Requirements tags */}
                            {job.requirements && job.requirements.length > 0 && (
                                <div className="mb-6">
                                    <p className="text-sm text-gray-500 mb-2">Required Skills:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {job.requirements.slice(0, 3).map((skill, index) => (
                                            <span 
                                                key={index}
                                                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {job.requirements.length > 3 && (
                                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                                                +{job.requirements.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Responsibilities preview */}
                            {job.responsibilities && job.responsibilities.length > 0 && (
                                <div className="mb-6">
                                    <p className="text-sm text-gray-500 mb-2">Key Responsibilities:</p>
                                    <div className="text-gray-700 text-sm space-y-1">
                                        {job.responsibilities.slice(0, 2).map((responsibility, index) => (
                                            <div key={index} className="flex items-start">
                                                <span className="text-blue-500 mr-2">•</span>
                                                <span>{responsibility}</span>
                                            </div>
                                        ))}
                                        {job.responsibilities.length > 2 && (
                                            <div className="text-gray-500 text-xs">
                                                +{job.responsibilities.length - 2} more responsibilities
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Job description preview */}
                            {job.description && (
                                <div className="mb-6">
                                    <p className="text-sm text-gray-500 mb-2">Description:</p>
                                    <p className="text-gray-700 text-sm line-clamp-2">
                                        {job.description.length > 100 
                                            ? `${job.description.substring(0, 100)}...` 
                                            : job.description
                                        }
                                    </p>
                                </div>
                            )}

                            {/* Apply button */}
                            <button
                                onClick={() => handleApplyNow(job._id)}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Apply Now →
                            </button>
                        </div>

                        {/* Hover effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                ))}
            </div>

            {/* Show total count and See More button */}
            <div className="text-center mt-12">
                <p className="text-gray-600 text-lg mb-6">
                    Showing <span className="font-bold text-blue-600">{Math.min(visibleJobs, jobs.length)}</span> of <span className="font-bold text-blue-600">{jobs.length}</span> hot jobs
                </p>
                
                {visibleJobs < jobs.length && (
                    <button
                        onClick={handleSeeMore}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        See More Jobs ({jobs.length - visibleJobs} remaining)
                    </button>
                )}
                
                {visibleJobs >= jobs.length && jobs.length > 6 && (
                    <p className="text-green-600 font-semibold">
                        ✅ All jobs are now visible!
                    </p>
                )}
            </div>
        </div>
    );
};

export default HotJobs;