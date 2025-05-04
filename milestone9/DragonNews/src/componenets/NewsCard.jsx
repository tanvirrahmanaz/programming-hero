import React from 'react';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import {  FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const { title, image_url, author, details, total_view, rating } = news;

    return (
        <div className="rounded-lg bg-white shadow-md p-5 space-y-4">
            {/* Author Info */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src={author.img} alt={author.name} className="w-12 h-12 rounded-full" />
                    <div>
                        <h2 className="font-bold">{author.name}</h2>
                        <p className="text-gray-500 text-sm">{new Date(author.published_date).toISOString().split('T')[0]}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-gray-500 text-xl">
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold">{title}</h2>

            {/* Image */}
            <img src={image_url} alt="news" className="rounded-lg w-full" />

            {/* Details */}
            <p className="text-gray-700 text-sm">
                {details.slice(0, 250)}...
                <span className="text-orange-500 font-semibold cursor-pointer"> Read More</span>
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-t">
            <div className="flex items-center gap-1 text-orange-500">
  {
    [...Array(5)].map((_, i) => {
      const roundedRating = Math.floor(rating.number);
      const hasHalf = rating.number - roundedRating >= 0.5;

      if (i < roundedRating) return <FaStar key={i} />;
      else if (i === roundedRating && hasHalf) return <FaStarHalfAlt key={i} />;
      else return <FaRegStar key={i} />;
    })
  }
  <span className="text-black ml-2">{rating.number}</span>
</div>
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
