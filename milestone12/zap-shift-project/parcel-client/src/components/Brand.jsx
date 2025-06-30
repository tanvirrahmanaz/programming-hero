import React from 'react';

// Import your local brand images
import amazonLogo from '../assets/brands/amazon.png';
import casioLogo from '../assets/brands/casio.png';
import randstadLogo from '../assets/brands/randstad.png';
import moonstarLogo from '../assets/brands/moonstar.png';
import start from '../assets/brands/start.png';

const brandsData = [
    { name: 'Amazon', logo: amazonLogo },
    { name: 'Casio', logo: casioLogo },
    { name: 'Randstad', logo: randstadLogo },
    { name: 'MoonStar', logo: moonstarLogo },
    { name: 'Start', logo: start }
];

const Brand = () => {
    return (
        <div className="py-12 lg:py-16 bg-white ">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold text-gray-800  mb-10">
                    Trusted By The Best Companies
                </h2>
                
                {/* Main container for the scroller */}
                <div 
                    className="w-full inline-flex flex-nowrap overflow-hidden 
                    [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    {/* First list for the infinite scroll effect */}
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
                        {brandsData.map((brand, index) => (
                           <li key={index} className="flex items-center">
                                <img 
                                    src={brand.logo} 
                                    alt={brand.name} 
                                    className="h-10 w-auto max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" 
                                />
                           </li>
                        ))}
                    </ul>
                    
                    {/* Second list is a duplicate for the seamless loop */}
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll" aria-hidden="true">
                        {brandsData.map((brand, index) => (
                           <li key={`duplicate-${index}`} className="flex items-center">
                                <img 
                                    src={brand.logo} 
                                    alt={brand.name} 
                                    className="h-10 w-auto max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" 
                                />
                           </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Brand;