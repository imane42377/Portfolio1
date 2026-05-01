"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Stats from "../elements/Stats";
import Testemonials from "../elements/Testemonials";
import Journey from "../elements/Journey";
import Skills from "../elements/Skills";
import Info from "../elements/Info";
import Blob from "../elements/Blob";
import Image from "next/image";
import avatarImg from "@/public/assets/omran.png";
import Socials from "../elements/Socials";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.5,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-170">
          {/* image and social icons */}
          <div className="w-full h-full pt-14 max-w-107.5 relative">
  
            {/* DESKTOP IMAGE */}
        <div className="hidden xl:block flex-1 relative z-10 pointer-events-none">
          <Blob containerStyles="w-[550px] h-[450px]" />
          <Image
            src={avatarImg}
            alt="avatar"
            width={440}
            height={600}
            quality={100}
            className="absolute -top-80 left-14"
          />
          <div className="w-445 h-40 absolute z-10 bottom-0 left-0 right-0 bg-linear-to-t from-primary via-primary/90 to-primary/10" />
           <div className="pointer-events-auto">
        <Socials
            styles="flex relative z-30 gap-4 z-40 w-max transform translate-x-[150px]"
            iconS="w-[48px] h-[48px] relative z-30 text-[22px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer"
        />
    </div>
        </div>
        
          </div>

          {/* scroll area */}
          <ScrollArea className="w-full h-170 relativ z-30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <p>
                About Me
              </p>
            </div>
            <h2 className="h2 mb-6">
              <span className="text-accent pr-2">
                John
              </span>
              Smith
            </h2>
            <p className="max-w-135 mb-12">
              I'm a full-stack web developer with a strong passion for building beautiful, functional, and user-friendly applications. I specialize in modern web technologies like React, Next.js, Node.js, and TypeScript, and I'm always looking to learn and grow with the ever-evolving tech landscape.
            </p>
            <div className="flex flex-col items-start gap-16">
               <Stats />
            <Testemonials />
            <Info />
            <Journey />
            <Skills />
            </div>
           
          </ScrollArea>
        </div>
      </div>

    </motion.section>
  )
}

export default About;