import React from 'react';
import livetrackingImage from '../assets/benefit/live-tracking.png';
import safedeliveryImage from '../assets/benefit/safe-delivery.png';
import supportImage from '../assets/benefit/tiny-deliveryman.png';

// Benefit data with image paths and titles from your screenshot
const benefitsData = [
  {
    image: livetrackingImage,
    title: 'Live Parcel Tracking',
    description: 'Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.',
  },
  {
    image: safedeliveryImage,
    title: '100% Safe Delivery',
    description: 'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
  },
  {
    image: supportImage,
    title: '24/7 Call Center Support',
    description: 'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
  }
];

const BenefitSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why You Should Choose Us</h2>
          <p className="text-gray-600 mt-2">The best reasons to use our services for your business.</p>
          <div className="mt-4 w-24 h-1 bg-lime-400 mx-auto rounded"></div>
        </div>

        {/* Benefits List */}
        <div className="space-y-16">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              // index er opor base kore layout alternate kora hocche
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center bg-gray-50 p-8 rounded-xl shadow-sm`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 p-4 flex justify-center">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="max-w-sm w-full h-auto rounded-lg"
                  // Fallback for broken image links
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/f0f9ff/3b82f6?text=Image+Not+Found'; }}
                />
              </div>

              {/* Text Content Section */}
              <div className="lg:w-1/2 p-4 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
