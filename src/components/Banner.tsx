"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./banner.module.css";

export default function Banner() {
    const covers = [
        "/img/cover.jpg",
        "/img/cover2.jpg",
        "/img/cover3.jpg",
        "/img/cover4.jpg",
    ];

    const [coverIndex, setCoverIndex] = useState(0);
    const router = useRouter();

    const handleBannerClick = () => {
        setCoverIndex((currentIndex) => (currentIndex + 1) % covers.length);
    };

    const handleSelectVenue = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        router.push("/venue");
    };

    return (
        <div className={styles.banner} onClick={handleBannerClick}>
            <Image
                src={covers[coverIndex]}
                alt="Venue Banner"
                fill
                priority
                className={styles.bannerImage}
            />

            <div className={styles.bannerContent}>
                <h1 className={styles.title}>
                    where every event finds its venue
                </h1>

                <p className={styles.subtitle}>
                    Discover and book the ideal space for weddings, corporate
                    conferences, and private celebrations.
                </p>
            </div>

            <button
                type="button"
                className={styles.selectButton}
                onClick={handleSelectVenue}
            >
                Select Venue
            </button>
        </div>
    );
}