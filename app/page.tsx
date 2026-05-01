"use client";
import { motion } from "framer-motion";
import Blob from "./elements/Blob";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import avatarImg from "@/public/assets/omran.png";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Socials from "./elements/Socials";
import Pattern from "./elements/Pattern";

const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.5,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-screen relative flex items-center py-17 overflow-hidden"
    >
      <Pattern />
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        <div className="flex w-full xl:w-137.5 lg:pl-7 flex-col items-center xl:items-start text-center xl:text-left">

          {/* H1 */}
          <h1 className="h1 mb-7">
            Hi it's John, <br />
            <TypeAnimation
              sequence={["Web Developer", 2000, "FrontEnd Developer", 2000, "FullStack Developer", 2000]}
              wrapper="span"
              speed={40}
              className="text-accent whitespace-nowrap text-3xl xl:text-5xl"
              repeat={Infinity}
              cursor={false}
            />
          </h1>

          {/* MOBILE IMAGE with full design — hidden on xl+ */}
          <div className="xl:hidden relative w-full flex justify-center mt-6 ">
            <div className="relative z-10">
              <Blob containerStyles="w-[400px] h-[270px]" />
              <Image
                src={avatarImg}
                alt="avatar"
                width={260}
                height={360}
                quality={100}
                className="absolute -top-48 left-11 pointer-events-none"
              />
              <div className="w-full h-24 absolute bottom-0 left-0 right-0 bg-linear-to-t from-primary via-primary/90 to-primary/40" />
            </div>
          </div>

          {/* PARAGRAPH */}
          <p className="max-w-125 mb-5 mt-1 xl:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* BUTTON */}
          <button className="btn btn-lg btn-accent xl:mb-16 mb-5">
            <div className="flex items-center justify-center gap-2">
              <span>Let's talk.</span>
              <ArrowUpRight width={25} height={25} />
            </div>
          </button>

          {/* CONTACTS */}
          <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-8 xl:pt-10 pt-3  mb-3 xl:mb-0 relative z-30">
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <Phone />
              </span>
              <span className="whitespace-nowrap">+212 6-70-95-22-18</span>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-4 text-lg">
              <div className="flex gap-4">
                <span className="text-accent">
                  <Mail />
                </span>
                <span>imanemeliane18@gmail.com</span>
              </div>
              <div className="flex gap-4">
                <span className="text-accent">
                  <Mail />
                </span>
                <span>imanemeliane20@gmail.com</span>
              </div>
            </div>
          </div>

          {/* SOCIALS desktop */}
          <div className="hidden xl:block">
            <Socials styles="flex xl:flex-col gap-6 xl:absolute xl:top-1/2 xl:right-4 xl:-translate-y-1/2 relative z-30" 
            iconS="bg-accent text-white hover:bg-accent-hover transition w-10 h-10 text-[22px] flex items-center justify-center rounded-full cursor-pointer relative z-50"
            />
          </div>

        </div>

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
          <div className="w-445 h-40 absolute bottom-0 left-0 right-0 bg-linear-to-t from-primary via-primary/90 to-primary/40" />
        </div>

      </div>
    </motion.section>
  );
};

export default page;