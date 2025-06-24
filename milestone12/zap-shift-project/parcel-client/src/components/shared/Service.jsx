import React, { useEffect, useState } from 'react';

// Icon component for the cards (for a nice touch)
const ServiceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const Services = () => {
    // Services datake store korar jonno state toiri kora holo
    const [services, setServices] = useState([]);

    // Component load howar shathe shathe data fetch korar jonno useEffect use kora holo
    useEffect(() => {
        fetch('/services.json') // public folder theke file ta load kora hocche
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error("Error fetching services:", error)); // Error handling
    }, []); // Empty array dewar mane holo ei effect shudhu ekbar cholbe


    return (
        <section className="py-12 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Awesome Services</h2>
                    <p className="text-gray-600 mt-2">We provide the best parcel services for you.</p>
                    <div className="mt-4 w-24 h-1 bg-lime-400 mx-auto rounded"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Ekhane state theke data map kora hocche */}
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 hover:bg-lime-400"
                        >
                            <div className="flex items-center mb-4">
                                <div className="p-3 rounded-full bg-lime-100 text-lime-600 group-hover:bg-white transition-colors duration-300">
                                   <ServiceIcon />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 ml-4 group-hover:text-white">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 group-hover:text-white">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
