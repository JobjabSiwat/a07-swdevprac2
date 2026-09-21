"use client";

import React, { useReducer } from "react";
import Link from "next/link";
import Card from "./Card";

type RatingAction =
    | {
        type: "SET_RATING";
        venueName: string;
        rating: number;
    }
    | {
        type: "REMOVE_RATING";
        venueName: string;
    };

function ratingReducer(
    state: Map<string, number>,
    action: RatingAction
): Map<string, number> {
    const newMap = new Map(state);

    switch (action.type) {
        case "SET_RATING":
            newMap.set(action.venueName, action.rating);
            return newMap;

        case "REMOVE_RATING":
            newMap.delete(action.venueName);
            return newMap;

        default:
            return state;
    }
}

const initialRatings = new Map<string, number>([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0],
]);

export default function CardPanel() {
    const [ratingMap, dispatch] = useReducer(
        ratingReducer,
        initialRatings
    );

    const handleRatingChange = (
        venueName: string,
        rating: number
    ) => {
        dispatch({
            type: "SET_RATING",
            venueName,
            rating,
        });
    };

    const handleRemoveRating = (venueName: string) => {
        dispatch({
            type: "REMOVE_RATING",
            venueName,
        });
    };

    const venues = [
        {
            vid: "001",
            venueName: "The Bloom Pavilion",
            imgSrc: "/img/bloom.jpg",
        },
        {
            vid: "002",
            venueName: "Spark Space",
            imgSrc: "/img/sparkspace.jpg",
        },
        {
            vid: "003",
            venueName: "The Grand Table",
            imgSrc: "/img/grandtable.jpg",
        },
    ];

    return (
        <div
            style={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "40px",
                paddingBottom: "80px",
                paddingLeft: "24px",
                paddingRight: "24px",
                backgroundColor: "#f9fafb",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "32px",
                    maxWidth: "1280px",
                    width: "100%",
                    marginBottom: "48px",
                }}
            >
                {venues.map((venue) => (
                    <Link
                        href={`/venue/${venue.vid}`}
                        key={venue.vid}
                    >
                        <Card
                            venueName={venue.venueName}
                            imgSrc={venue.imgSrc}
                            onRatingChange={handleRatingChange}
                        />
                    </Link>
                ))}
            </div>

            <div
                style={{
                    width: "100%",
                    maxWidth: "440px",
                    backgroundColor: "#ffffff",
                    padding: "24px",
                    borderRadius: "16px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    border: "1px solid #e5e7eb",
                }}
            >
                <h2
                    style={{
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        color: "#1f2937",
                        marginBottom: "16px",
                        paddingBottom: "12px",
                        borderBottom: "1px solid #f3f4f6",
                        textAlign: "center",
                    }}
                >
                    Venue List with Ratings : {ratingMap.size}
                </h2>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    {Array.from(ratingMap.entries()).map(
                        ([venue, rating]) => (
                            <div
                                key={venue}
                                data-testid={venue}
                                onClick={() => handleRemoveRating(venue)}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "12px 16px",
                                    backgroundColor: "#f9fafb",
                                    border: "1px solid #e5e7eb",
                                    borderRadius: "12px",
                                    cursor: "pointer",
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: 600,
                                        color: "#374151",
                                    }}
                                >
                                    {venue}
                                </span>

                                <span
                                    style={{
                                        fontWeight: 700,
                                        color: "#111827",
                                        backgroundColor: "#ffffff",
                                        padding: "4px 12px",
                                        borderRadius: "6px",
                                        border: "1px solid #e5e7eb",
                                    }}
                                >
                                    {rating}
                                </span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}