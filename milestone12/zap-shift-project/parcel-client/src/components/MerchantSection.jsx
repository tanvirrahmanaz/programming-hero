import React from 'react';
import bgImage from '../assets/merchant/be-a-merchant-bg.png';
import rightSideImage from '../assets/merchant/location-merchant.png';

const MerchantSection = () => {
    return (
        <section className="py-12 bg-white lg:py-16">
            <div className="container mx-auto px-4">
                <div
                    className="relative bg-no-repeat bg-cover bg-center rounded-2xl p-8 md:p-12 lg:p-16 overflow-hidden"

                >
                    {/* Semi-transparent Dark Overlay */}
                    <div className="absolute inset-0 bg-[#03373D] bg-opacity-500">

                        {/* Background Image Layer */}
                        <img
                            src={bgImage}
                            alt="Background"
                            className="absolute inset-1 w-full h-full object-cover opacity-70"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col lg:flex-row items-center">

                        {/* Left Side: Text and Buttons */}
                        <div className="lg:w-3/5 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Merchant and Customer Satisfaction is Our First Priority
                            </h2>
                            <p className="mt-4 text-gray-200 max-w-xl mx-auto lg:mx-0">
                                We offer the lowest delivery charge with the highest value along with 100% safety of your product. Our courier service delivers your parcels in every corner of Bangladesh right on time.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="btn bg-lime-400 hover:bg-lime-500 border-none text-gray-900 font-bold">
                                    Become a Merchant
                                </button>
                                <button className="btn btn-outline border-gray-300 text-white hover:bg-white hover:text-gray-900">
                                    Earn with ParcelFlow
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="lg:w-2/5 mt-10 lg:mt-0 flex justify-center lg:justify-end">
                            <img
                                src={rightSideImage}
                                alt="Merchant Location"
                                className="w-full max-w-xs md:max-w-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MerchantSection;