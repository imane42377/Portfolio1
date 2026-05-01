"use client";
import React, { useState } from 'react'

const experience = [
    { date: "June 2024", role: "Full Stack Developer", place: "Commune of Ouled Mrah" },
    { date: "July 2025", role: "App Developer", place: "NOVA MAROC Company" },
]

const education = [
    { date: "2023-2024", role: "1st Year Student in Computer Science", place: "Brévet de Téchnicien Spécialisé School, Settat, Morocco" },
    { date: "2024-2025", role: "2nd Year Student in Computer Science", place: "Brévet de Téchnicien Spécialisé School, Settat, Morocco" },
]

const certificates = [
    { date: "September 28, 2025", role: "React Basics Course Certificate", place: "Coursera", link: "" },
    { date: "November 16, 2025", role: "Advanced React Course Certificate", place: "Coursera", link: "" },
]

const tabs = [
    { label: "Experience", data: experience },
    { label: "Education", data: education },
    { label: "Certificates", data: certificates },
]

const JourneyCard = ({ date, role, place, link }: { date: string, role: string, place: string, link?: string }) => (
    <div className="bg-secondary rounded-lg p-5 md:p-8 flex flex-col items-center text-center gap-2 md:gap-3">
        <span className="text-accent font-mono text-sm md:text-base">{date}</span>
        <h3 className="text-white font-bold text-lg md:text-xl">{role}</h3>
        <p className="text-muted-foreground font-mono text-sm md:text-base">{place}</p>
        {link && (
            <a href={link} className="text-accent font-mono text-sm hover:underline">
                View Certificate
            </a>
        )}
    </div>
)

const Journey = () => {
    const [active, setActive] = useState(0)

    return (
        <div className="px-4 md:px-0">
            <h2 className='h2 mb-6 md:mb-8 text-center   md:text-left whitespace-nowrap'>
                Education & <span className='text-accent italic'>Experience</span>
            </h2>

            {/* TABS */}
            <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-8 justify-center">
                {tabs.map((tab, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`btn btn-sm text-sm px-4 py-2 ${active === i ? "btn-accent" : "btn-secondary"}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* CARDS */}
            <div className="flex flex-col gap-3 md:gap-4">
                {tabs[active].data.map((item, i) => (
                    <JourneyCard key={i} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Journey