import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [mobileTestimonial, setMobileTestimonial] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const bannerImages = [
        {
            src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            alt: "Professional team collaboration and success",
            leftCard: {
                icon: "💼",
                category: "Tech Jobs",
                count: "1,200+ Active",
                bgColor: "from-blue-500 to-blue-600"
            },
            rightCard: {
                icon: "🏥",
                category: "Healthcare",
                count: "800+ Positions",
                bgColor: "from-green-500 to-green-600"
            }
        },
        {
            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            alt: "Diverse team working together in modern office",
            leftCard: {
                icon: "🎨",
                category: "Design",
                count: "650+ Creative",
                bgColor: "from-purple-500 to-purple-600"
            },
            rightCard: {
                icon: "📊",
                category: "Marketing",
                count: "400+ Campaigns",
                bgColor: "from-orange-500 to-orange-600"
            }
        },
        {
            src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            alt: "Business professionals in strategic meeting",
            leftCard: {
                icon: "💰",
                category: "Finance",
                count: "350+ Banking",
                bgColor: "from-emerald-500 to-emerald-600"
            },
            rightCard: {
                icon: "⚖️",
                category: "Legal",
                count: "200+ Firms",
                bgColor: "from-indigo-500 to-indigo-600"
            }
        },
        {
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            alt: "Startup team brainstorming innovative solutions",
            leftCard: {
                icon: "🚀",
                category: "Startups",
                count: "900+ Ventures",
                bgColor: "from-pink-500 to-pink-600"
            },
            rightCard: {
                icon: "🔬",
                category: "Research",
                count: "300+ Labs",
                bgColor: "from-cyan-500 to-cyan-600"
            }
        },
        {
            src: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            alt: "Remote work and digital collaboration",
            leftCard: {
                icon: "🏠",
                category: "Remote",
                count: "2,000+ Global",
                bgColor: "from-teal-500 to-teal-600"
            },
            rightCard: {
                icon: "🎓",
                category: "Education",
                count: "500+ Learning",
                bgColor: "from-amber-500 to-amber-600"
            }
        }
    ];
    
    const testimonials = [
        {
            text: "Found my dream job in 2 weeks!",
            author: "Sarah, Product Designer",
            icon: "⭐",
            bg: "yellow",
            position: "left"
        },
        {
            text: "Hired 5 great candidates quickly",
            author: "Tech Startup CEO",
            icon: "👔",
            bg: "blue",
            position: "right"
        },
        {
            text: "Amazing remote opportunities!",
            author: "Mike, Software Engineer",
            icon: "💻",
            bg: "green",
            position: "left"
        },
        {
            text: "Salary negotiation support was excellent",
            author: "Lisa, Marketing Manager",
            icon: "💰",
            bg: "purple",
            position: "right"
        },
        {
            text: "Perfect match for my skills",
            author: "John, Data Scientist",
            icon: "🎯",
            bg: "red",
            position: "left"
        },
        {
            text: "Best platform for freelancers",
            author: "Emma, Graphic Designer",
            icon: "🎨",
            bg: "pink",
            position: "right"
        },
        {
            text: "Quick application process",
            author: "David, DevOps Engineer",
            icon: "⚡",
            bg: "indigo",
            position: "left"
        },
        {
            text: "Great company culture matches",
            author: "Anna, HR Specialist",
            icon: "🏢",
            bg: "teal",
            position: "right"
        },
        {
            text: "Helped me switch careers successfully",
            author: "Tom, UX Designer",
            icon: "🔄",
            bg: "orange",
            position: "left"
        },
        {
            text: "International job opportunities",
            author: "Maria, Project Manager",
            icon: "🌍",
            bg: "cyan",
            position: "right"
        },
        {
            text: "Excellent interview preparation tips",
            author: "Alex, Business Analyst",
            icon: "📝",
            bg: "lime",
            position: "left"
        },
        {
            text: "Top-tier companies reached out",
            author: "Rachel, Full Stack Developer",
            icon: "🚀",
            bg: "violet",
            position: "right"
        }
    ];
    
    const mobileTestimonials = [
        { text: "Dream job found!", author: "Sarah", icon: "⭐" },
        { text: "Quick hiring process", author: "Mike", icon: "⚡" },
        { text: "Remote work success", author: "Lisa", icon: "💻" },
        { text: "Perfect career match", author: "John", icon: "🎯" },
        { text: "Freelance opportunities", author: "Emma", icon: "🎨" },
        { text: "Great company culture", author: "Anna", icon: "🏢" }
    ];
    
    // Banner image rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
        }, 4000);
        
        return () => clearInterval(interval);
    }, []);
    
    // Desktop testimonial rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);
    
    // Mobile testimonial rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setMobileTestimonial((prev) => (prev + 1) % mobileTestimonials.length);
        }, 2500);
        
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="hero bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen relative overflow-hidden">
            {/* Enhanced background animated elements */}
            <motion.div
                className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 hidden md:block"
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-32 right-16 w-16 h-16 bg-purple-200 rounded-full opacity-20 hidden md:block"
                animate={{
                    y: [0, 25, 0],
                    x: [0, -15, 0],
                    rotate: [0, -180, -360],
                    scale: [1, 0.8, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
            <motion.div
                className="absolute top-1/2 right-10 w-12 h-12 bg-green-200 rounded-full opacity-15 hidden lg:block"
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            
              {/* Main content */}
            <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-4 py-12 md:py-24">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/2 relative mb-12 lg:mb-0 px-8 py-8"
                >
                    <motion.div className="relative max-w-md mx-auto">
                        {/* Gradient overlay behind image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
                        
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImageIndex}
                                src={bannerImages[currentImageIndex].src}
                                className="w-full rounded-2xl shadow-2xl relative z-10 border-4 border-white"
                                alt={bannerImages[currentImageIndex].alt}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1,
                                    y: [0, -10, 0],
                                }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ 
                                    opacity: { duration: 0.5 },
                                    scale: { duration: 0.5 },
                                    y: {
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                                    rotate: 1
                                }}
                            />
                        </AnimatePresence>

                        {/* Floating job cards - Fixed to show for all images */}
                        <motion.div
                            className="absolute top-4 -left-16 sm:-left-20 bg-white p-3 rounded-xl shadow-xl border border-gray-100 z-20 w-36"
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 3, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                rotate: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                            }}
                        >
                            <div className="flex items-center space-x-2">
                                <div className={`w-10 h-10 ${bannerImages[currentImageIndex].leftCard.bgColor} rounded-lg flex items-center justify-center`}>
                                    <span className="text-white text-sm">{bannerImages[currentImageIndex].leftCard.icon}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">{bannerImages[currentImageIndex].leftCard.category}</p>
                                    <p className="text-xs text-green-600 font-medium">{bannerImages[currentImageIndex].leftCard.count}</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-4 -right-16 sm:-right-20 bg-white p-3 rounded-xl shadow-xl border border-gray-100 z-20 w-36"
                            animate={{
                                y: [0, 12, 0],
                                rotate: [0, -2, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.5
                                },
                                rotate: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.5
                                }
                            }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                            }}
                        >
                            <div className="flex items-center space-x-2">
                                <div className={`w-10 h-10 ${bannerImages[currentImageIndex].rightCard.bgColor} rounded-lg flex items-center justify-center`}>
                                    <span className="text-white text-sm">{bannerImages[currentImageIndex].rightCard.icon}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">{bannerImages[currentImageIndex].rightCard.category}</p>
                                    <p className="text-xs text-green-600 font-medium">{bannerImages[currentImageIndex].rightCard.count}</p>
                                </div>
                            </div>
                        </motion.div>

                                    
                        
                        
                        {/* New floating element */}
                        <motion.div
                            className="absolute top-1/2 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full shadow-lg z-20"
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                        >
                            <span className="text-white text-lg">✨</span>
                        </motion.div>
                    </motion.div>
                    
                    {/* Enhanced company logos */}
                    <div className="hidden md:flex justify-center mt-8 space-x-4">
                        {[
                            { name: 'Google', color: 'from-blue-500 to-green-500' },
                            { name: 'Microsoft', color: 'from-blue-600 to-blue-700' },
                            { name: 'Amazon', color: 'from-orange-500 to-yellow-500' },
                            { name: 'Netflix', color: 'from-red-500 to-red-600' }
                        ].map((company, index) => (
                            <motion.div
                                key={company.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                className={`bg-gradient-to-r ${company.color} p-3 px-5 rounded-lg shadow-md text-sm font-medium text-white`}
                                whileHover={{ scale: 1.05, y: -2 }}
                            >
                                {company.name}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                
                {/* Enhanced Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 text-center lg:text-left px-4"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Find Your <motion.span 
                            className="block"
                            animate={{ 
                                backgroundPosition: ["0%", "100%", "0%"],
                            }}
                            transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            Dream Job Today
                        </motion.span>
                    </motion.h1>
                    
                    <motion.p
                        className="py-4 md:py-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Join over 100,000 professionals who found their perfect career match.
                        Browse thousands of verified job listings from top companies worldwide.
                    </motion.p>
                    
                    {/* Enhanced Stats Section */}
                    <motion.div
                        className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        {[
                            { value: "15K+", label: "Active Jobs", color: "blue", icon: "💼" },
                            { value: "8K+", label: "Companies", color: "green", icon: "🏢" },
                            { value: "100K+", label: "Hired", color: "purple", icon: "🎉" }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center p-3 bg-white rounded-xl shadow-md"
                                whileHover={{ scale: 1.05, y: -2 }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                            >
                                <div className="text-2xl mb-1">{stat.icon}</div>
                                <div className={`text-2xl font-bold text-${stat.color}-600`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    {/* Enhanced CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <motion.button
                            className="btn btn-primary btn-lg px-8 bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white shadow-lg"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)",
                                y: -2
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            🔍 Browse Jobs
                        </motion.button>
                        <motion.button
                            className="btn btn-outline btn-lg px-8 border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white shadow-lg"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
                                y: -2
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            📝 Post a Job
                        </motion.button>
                    </motion.div>
                    
                    {/* Enhanced Mobile features */}
                    <div className="mt-8">
                        {/* Desktop testimonial display */}
                        <div className="hidden lg:flex items-center justify-start space-x-4 mb-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-600">AI-Powered Matching</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-600">Instant Apply</span>
                            </div>
                        </div>
                        
                        {/* Mobile testimonial carousel */}
                        <div className="lg:hidden ">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={mobileTestimonial}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white p-4 rounded-xl shadow-md border border-gray-100 mx-auto max-w-sm"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="text-lg">{mobileTestimonials[mobileTestimonial].icon}</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">
                                                "{mobileTestimonials[mobileTestimonial].text}"
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                - {mobileTestimonials[mobileTestimonial].author}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                            
                            {/* Mobile indicators */}
                            <div className="flex justify-center mt-4 space-x-2">
                                {mobileTestimonials.map((_, index) => (
                                    <div 
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            index === mobileTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            {/* Sequential Desktop Testimonials */}
            <div className="hidden lg:block">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentTestimonial}
                        className={`absolute bg-white p-4 rounded-xl shadow-lg max-w-xs z-30 ${
                            testimonials[currentTestimonial].position === 'left' 
                                ? 'bottom-20 left-1/4' 
                                : 'bottom-32 right-1/4'
                        }`}
                        initial={{ 
                            opacity: 0, 
                            y: 50,
                            scale: 0.8
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            x: testimonials[currentTestimonial].position === 'left' 
                                ? ["0%", "-3%", "0%"] 
                                : ["0%", "3%", "0%"]
                        }}
                        exit={{ 
                            opacity: 0, 
                            y: -30,
                            scale: 0.8
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex items-center space-x-3">
                            <div className={`w-12 h-12 bg-${testimonials[currentTestimonial].bg}-100 rounded-full flex items-center justify-center`}>
                                <span className={`text-xl text-${testimonials[currentTestimonial].bg}-600`}>
                                    {testimonials[currentTestimonial].icon}
                                </span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-800">
                                    "{testimonials[currentTestimonial].text}"
                                </p>
                                <p className="text-xs text-gray-500">
                                    - {testimonials[currentTestimonial].author}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Banner;