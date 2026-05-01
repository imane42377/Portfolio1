"use client";
import { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import {
    SiReact,
    SiNextdotjs,
    SiSpringboot,
    SiFramer,
} from "react-icons/si";
import { RiPagesLine, RiBriefcaseLine } from "react-icons/ri";

const services  = [
    {
        icon: <SiReact size={36} />,
        title: "Frontend Development",
        description: "Modern, responsive UIs with React & Next.js.",
        href: "/contact",
    },
    {
        icon: <SiSpringboot size={36} />,
        title: "Backend Development",
        description: "Scalable APIs and server-side logic.",
        href: "/contact",
    },
    {
        icon: <SiNextdotjs size={36} />,
        title: "Full Stack Development",
        description: "End-to-end product delivery from DB to UI.",
        href: "/contact",
    },
    {
        icon: <RiPagesLine size={36} />,
        title: "Landing Pages",
        description: "High-converting pages built to impress.",
        href: "/contact",
    },
    {
        icon: <RiBriefcaseLine size={36} />,
        title: "Portfolio Sites",
        description: "Personal portfolios that get you hired.",
        href: "#",
    },
    {
        icon: <SiFramer size={36} />,
        title: "UI Animations",
        description: "Smooth, delightful motion with Framer Motion.",
        href: "#",
    },
];

const containerVariants :Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 0.4,
            ease: "easeIn",
            staggerChildren: 0.1,
        },
    },
};

const itemVariants :Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const Services = () => {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="min-h-screen py-20"
        >
            <div className="container mx-auto px-4">

                {/* Header */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center gap-3 mb-16"
                >
                    <h2 className="h2 leading-tight">
                        Web Development  {" "}
                        <span className="text-accent italic">Services</span>
                        <br />
                        I can provide
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service : any, i: any) => (
                        <motion.a
                            key={i}
                            href={service.href}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="group relative bg-secondary/50 border border-white/5 rounded-xl p-6 flex flex-col justify-between gap-10 hover:border-accent/30 transition-all duration-300 cursor-pointer"
                        >
                            {/* Top row */}
                            <div className="flex items-start justify-between">
                                <div className="text-accent">
                                    {service.icon}
                                </div>
                                <div
                                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                    <BsArrowUpRight size={16} />
                                </div>
                            </div>

                            {/* Bottom */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-white font-bold text-lg leading-snug">
                                    {service.title}
                                </h3>
                                <p className="text-white/40 font-mono text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </motion.section>
    );
};

export default Services;