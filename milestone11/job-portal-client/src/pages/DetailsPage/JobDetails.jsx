import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job);

    // Format salary range
    const formatSalary = (min, max, currency) => {
        const currencySymbol = currency === 'bdt' ? '৳' : '$';
        return `${currencySymbol}${min.toLocaleString()} - ${currencySymbol}${max.toLocaleString()}`;
    };

    // Format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Get job type badge color
    const getJobTypeBadge = (type) => {
        const badges = {
            'Hybrid': 'badge-warning',
            'Remote': 'badge-success',
            'Onsite': 'badge-info',
            'Full-time': 'badge-primary',
            'Part-time': 'badge-secondary'
        };
        return badges[type] || 'badge-neutral';
    };

    return (
        <div className="min-h-screen bg-base-200 py-8">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header Section */}
                <div className="card bg-base-100 shadow-xl mb-8">
                    <div className="card-body">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                            {/* Company Logo */}
                            <div className="avatar">
                                <div className="w-20 h-20 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={job.company_logo} alt={job.company} className="object-cover" />
                                </div>
                            </div>
                            
                            {/* Job Info */}
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <h1 className="text-3xl font-bold text-base-content">{job.title}</h1>
                                    <div className={`badge ${getJobTypeBadge(job.jobType)} badge-lg`}>
                                        {job.jobType}
                                    </div>
                                    <div className="badge badge-outline badge-lg">{job.category}</div>
                                </div>
                                
                                <div className="flex flex-wrap items-center gap-4 text-base-content/70">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <span className="font-semibold">{job.company}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>{job.location}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                        </svg>
                                        <span className="font-semibold text-success">
                                            {formatSalary(job.salaryRange.min, job.salaryRange.max, job.salaryRange.currency)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Apply Button */}
                            <div className="flex flex-col items-end gap-2">
                               <Link to={`/apply/${job._id}`} className="w-full">
                                <button className="btn btn-primary btn-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Apply Now
                                </button>
                               </Link>
                                <div className="text-sm text-base-content/60">
                                    Deadline: {formatDate(job.applicationDeadline)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Job Description */}
                        <div className="card bg-base-100 shadow-lg">
                            <div className="card-body">
                                <h2 className="card-title text-xl mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Job Description
                                </h2>
                                <p className="text-base-content/80 leading-relaxed">{job.description}</p>
                            </div>
                        </div>

                        {/* Requirements */}
                        <div className="card bg-base-100 shadow-lg">
                            <div className="card-body">
                                <h2 className="card-title text-xl mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                    Requirements
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {job.requirements.map((req, index) => (
                                        <div key={index} className="badge badge-outline badge-lg p-3">
                                            {req}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="card bg-base-100 shadow-lg">
                            <div className="card-body">
                                <h2 className="card-title text-xl mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                    Responsibilities
                                </h2>
                                <ul className="space-y-3">
                                    {job.responsibilities.map((resp, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="badge badge-primary badge-sm mt-1 flex-shrink-0"></div>
                                            <span className="text-base-content/80">{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* HR Contact */}
                        <div className="card bg-base-100 shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title text-lg mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    HR Contact
                                </h3>
                                <div className="space-y-3">
                                    <div>
                                        <p className="font-semibold text-base-content">{job.hr_name}</p>
                                        <p className="text-sm text-base-content/60">HR Manager</p>
                                    </div>
                                    <a href={`mailto:${job.hr_email}`} className="btn btn-outline btn-sm w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Contact HR
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Job Info */}
                        <div className="card bg-base-100 shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title text-lg mb-4">Job Information</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-base-content/60">Status:</span>
                                        <div className="badge badge-success capitalize">{job.status}</div>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-base-content/60">Category:</span>
                                        <span className="font-medium">{job.category}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-base-content/60">Type:</span>
                                        <span className="font-medium">{job.jobType}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-base-content/60">Location:</span>
                                        <span className="font-medium">{job.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="card bg-base-100 shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title text-lg mb-4">Quick Actions</h3>
                                <div className="space-y-2">
                                    <button className="btn btn-outline btn-sm w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        Save Job
                                    </button>
                                    <button className="btn btn-outline btn-sm w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                        </svg>
                                        Share Job
                                    </button>
                                    <button className="btn btn-outline btn-sm w-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Report Job
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;