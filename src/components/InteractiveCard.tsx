'use client';

import React, { useState } from 'react';

export default function InteractiveCard({ children }: { children: React.ReactNode }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`w-[300px] bg-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${isHovered ? 'shadow-2xl scale-[1.02]' : 'shadow-md'
                }`}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
        >
            {children}
        </div>
    );
}