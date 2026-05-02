"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Pagination } from "swiper/modules";

const projects = [
  {
    id: 3,
    category: "applications",
    title: "Construction Permit Management",
    description: "During my internship at Ouled Mrah Municipality, I developed a web app to digitize construction permits and automate tax calculations. This replaced paper workflows, reducing delays and errors while improving transparency.",
    image: "/assets/Capture d'écran 2025-07-12 162846.png",
    pdf: "/Mon-Rapport-Meliane.pdf",
    link: "",
    github: "",
    teck: ["VB.net", "SQL Server"],
  },
  {
    id: 4,
    category: "applications",
    title: "Orders & Delivery",
    description: "At Nova Maroc, I developed an order/delivery tracking app that digitized manual processes, reducing errors and speeding up operations by 40%. The system featured real-time updates and automated reports.",
    image: "/assets/Capture d'écran 2025-06-15 122052.png",
    pdf: "/Rapport_stage_MELIANE.pdf",
    link: "",
    github: "https://github.com/imane42377/Commandes-Livraison",
    teck: ["Python tkinter", "MySQL Workbench"],
  },
  {
    id: 5,
    category: "fullstack",
    title: "Library",
    description: "With 2 classmates, I developed 'Library' — a management system for cataloging books, tracking loans, and managing members. Delivered a working prototype in 3 weeks.",
    image: "/assets/Capture d'écran 2025-07-12 181622.png",
    pdf: "/Rapport_gb.pdf",
    link: "",
    github: "https://github.com/imane42377/Library",
    teck: ["HTML", "CSS Bootstrap", "JavaScript jQuery", "PHP", "MySQL"],
  },
  {
    id: 6,
    category: "fullstack",
    title: "CliqRDV",
    description: "For my PFE, I co-developed a healthcare web app for online appointment booking. Our solution featured doctor scheduling and patient registration.",
    image: "/assets/Capture d'écran 2025-07-12 184923.png",
    pdf: "/PFE_Rapport.pdf",
    link: "https://imane.rf.gd/a",
    github: "https://github.com/imane42377/PFE_-CliqRDV-",
    teck: ["HTML", "CSS Bootstrap", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: 7,
    category: "frontend",
    title: "MY_Calculator",
    description: "A simple calculator with basic functions that I created.",
    image: "/assets/Capture d'écran 2025-07-12 191901.png",
    pdf: "",
    link: "https://imane42377.github.io/My_Calculator/",
    github: "https://github.com/imane42377/My_Calculator",
    teck: ["HTML", "CSS", "JavaScript"],
  },
    {
    id: 8,
    category: "frontend landing page",
    title: "Lumiére Privé Landing Page",
    description: "This project focuses on creating a premium and elegant user experience inspired by luxury concierge services,with multi-language support & light/dark mode toggling.",
    image: "/assets/Capture d'écran 2026-04-28 135313.png",
    pdf: "",
    link: "lumi-re-priv-e-xn4b.vercel.app/",
    github: "https://github.com/imane42377/Lumi-re-Priv-e",
    teck: ["i18n","React", "Tailwind CSS", "Framer-Motion"],
  },
    {
    id: 9,
    category: "frontend landing page",
    title: "Ecommerce ",
    description: "Modern ecommerce landing page (React + Tailwind) with multi-language support & light/dark mode toggling",
    image: "/assets/Capture d'écran 2026-05-02 133820.png",
    pdf: "",
    link: "ttps://e-commerce-landing-page-nine-lilac.vercel.app/",
    github: "https://github.com/imane42377/ECommerce_landing_page",
    teck: ["i18n","React", "Tailwind CSS", "Framer-Motion"],
  },
   {
    id:10,
    category: "fullstack",
    title: "Trading Web Application",
    description: "TimeTravel – Crypto & Stock Investing Platform (Private, Commercial Project) with multi-language support & light/dark mode toggling",
    image: "/assets/Capture d'écran 2026-05-02 134518.png",
    pdf: "",
    link: "",
    github: "https://github.com/imane42377/TimeTravel-Crypto-Stock-Investing-Platform",
    teck: ["i18n","React", "Tailwind CSS", "Redux" , "SpringBoot" ,"MySql WorkBanch",'CoinGeko API'],
  },
   {
    id: 11,
    category: "frontend Portfolio",
    title: "Portfolio",
    description: "",
    image: "/assets/Capture d'écran 2026-05-02 135321.png",
    pdf: "",
    link: "https://portfolio-meliane-imane.vercel.app",
    github: "https://github.com/imane42377/Portfolio",
    teck: ["i18n","NextJs","React", "Tailwind CSS", "Framer-Motion"],
  },
];

const categories = ["frontend" ,"frontend landing page","frontend Portfolio", "fullstack", "applications", "branding"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full flex flex-col justify-center">
        <h2 className="h2 mb-6 xl:mb-12 max-w-150">
          My Latest <span className="text-accent italic">Work</span>
        </h2>

        <Tabs defaultValue="frontend" className="w-full flex flex-col gap-6 xl:gap-12">
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize border border-ring/10 data-[state=active]:bg-accent data-[state=active]:text-white data-[state=active]:border-accent h-12 px-6 rounded-full cursor-pointer"
              >
                {category === "uiux" ? "UI UX Design" : category}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="h-100 xl:h-full scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                {projects.filter((p) => p.category === category).length === 0 ? (
                  <div className="flex items-center justify-center h-60 text-muted-foreground text-sm">
                    No projects in this category yet.
                  </div>
                ) : (
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-max xl:h-115"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => (
                        <SwiperSlide key={project.id} className="h-full cursor-pointer">
                          <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">

                            {/* Text Side */}
                            <div className="w-full max-w-95 flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-0">
                              <h3 className="h3">{project.title}</h3>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {project.description}
                              </p>

                              <div className="max-w-96">
                                <p className="mb-4">Technologies Used</p>
                                <ul className="flex flex-wrap gap-4">
                                  {project.teck.map((item, i) => (
                                    <li
                                      key={i}
                                      className="flex items-center gap-4 bg-secondary h-7 px-3.5 rounded-full"
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Buttons */}
                              <div className="flex flex-col xl:flex-row gap-4 items-start flex-wrap">
                                {project.link && (
                                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className="btnn btn-sm btn-accent flex gap-2">
                                      <ArrowUpRight className="text-xl" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>
                                )}
                                {project.github && (
                                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <button className="btnn btn-sm btn-ring flex gap-2">
                                      <FaGithub className="text-xl" />
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                )}
                                {project.pdf && (
                                  <a href={project.pdf} download>
                                    <button className="btnn btn-sm btn-ring flex gap-2">
                                      <FileText className="text-xl" />
                                      <span>Download Report</span>
                                    </button>
                                  </a>
                                )}
                              </div>
                            </div>

                            {/* Image Side */}
                            <div className="w-full h-50 md:h-75 xl:h-100 relative bg-secondary order-1 xl:order-0 rounded-lg overflow-hidden">
                              {project.image ? (
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  className="object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                                  No Image Available
                                </div>
                              )}
                            </div>

                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;