'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import InteractiveCard from './InteractiveCard';

interface CardProps {
    venueName: string;
    imgSrc: string;
    onRatingChange?: (venueName: string, rating: number) => void;
}

export default function Card({ venueName, imgSrc, onRatingChange }: CardProps) {
    const [rating, setRating] = useState<number | null>(0);

    const handleRatingChange = (_event: React.SyntheticEvent, newValue: number | null) => {
        const val = newValue ?? 0;
        setRating(val);
        if (onRatingChange) {
            onRatingChange(venueName, val);
        }
    };

    return (
        <InteractiveCard>
            <div className="w-[300px] h-[220px] relative rounded-t-lg overflow-hidden">
                <Image
                    src={imgSrc}
                    alt={venueName}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4 text-center flex flex-col items-center gap-2">
                <h3 className="text-xl font-semibold text-gray-800">{venueName}</h3>
                <Rating
                    id={`${venueName} Rating`}
                    name={`${venueName} Rating`}
                    data-testid={`${venueName} Rating`}
                    value={rating}
                    onChange={handleRatingChange}
                />
            </div>
        </InteractiveCard>
    );
}