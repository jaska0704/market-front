'use client';
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export const StarRatings: React.FC = () => {
  const [rating, setRating] = useState<number | null>(3);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex gap-4">
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                className="hidden"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="cursor-pointer"
                size={20}
                color={
                  (hover !== null && currentRating <= hover) ||
                  (rating !== null && currentRating <= rating)
                    ? "#ffc107"
                    : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <h2>({rating ? rating : "0"})</h2>
    </div>
  );
};
