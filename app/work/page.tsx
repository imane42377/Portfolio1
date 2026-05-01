"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
const projects = [
  {
    id: 1,
    title: "Crypto Dashboard",
    category: "Frontend",
    tag: "React",
    year: "2024",
    description: "Real-time trading interface with live charts and portfolio tracking.",
    color: "var(--color-accent)",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Fullstack",
    tag: "Next.js",
    year: "2024",
    description: "Full-featured store with auth, payments, and admin panel.",
    color: "var(--color-accent)",
  },
  {
    id: 3,
    title: "Portfolio Builder",
    category: "Frontend",
    tag: "Vue",
    year: "2023",
    description: "Drag-and-drop portfolio generator with live preview.",
    color: "var(--color-accent)",
  },
  {
    id: 4,
    title: "SaaS API Gateway",
    category: "Fullstack",
    tag: "Node.js",
    year: "2023",
    description: "Rate-limited REST API with OAuth2 and usage analytics.",
    color: "var(--color-accent)",
  },
];

const filters = ["All", "Frontend", "Fullstack"];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants : Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

const Work = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen px-6 py-20 md:px-16"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            My Latest{" "}
            <span style={{ color: "var(--color-accent)" }}>Work</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className="relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 outline-none"
              style={{
                backgroundColor: active === filter ? "var(--color-accent)" : "transparent",
                color: active === filter ? "#ffffff" : "#9ca3af",
                border: active === filter ? "none" : "1.5px solid #2a2d3a",
                fontFamily: "'Courier New', monospace",
                cursor: "pointer",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          key={active}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative rounded-2xl p-6 cursor-pointer overflow-hidden"
              style={{
                backgroundColor: "#161822",
                border: "1px solid #1e2030",
                transition: "border-color 0.2s",
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              {/* Glow accent */}
              <div
                className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                style={{ backgroundColor: project.color }}
              />

              {/* Top row */}
              <div className="flex justify-between items-start mb-4 pt-2">
                <span
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: project.color + "22",
                    color: project.color,
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {project.tag}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "#4b5563", fontFamily: "'Courier New', monospace" }}
                >
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "'Courier New', monospace", color: "#e8e6f0" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#6b7280", fontFamily: "'Courier New', monospace" }}
              >
                {project.description}
              </p>

              {/* Arrow */}
              <div
                className="mt-5 flex items-center gap-1 text-xs font-medium group-hover:gap-3 transition-all duration-200"
                style={{ color: project.color }}
              >
                View Project
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Work;