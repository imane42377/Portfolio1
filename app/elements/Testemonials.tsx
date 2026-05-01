"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const tests = [
    
    { message: "Absolutely incredible work! I couldn't believe how fast everything was delivered.", name: "James Carter" },
    { message: "Best developer I've ever worked with. My website looks amazing now!", name: "Sarah Johnson" },
    { message: "Super professional and very easy to communicate with. 10/10 would recommend.", name: "Mike Thompson" },
    { message: "He turned my boring website into something I'm actually proud to show people.", name: "Emily Davis" },
    { message: "Fast, clean, and pixel perfect. Exactly what I was looking for.", name: "Chris Wilson" },
    { message: "I had no idea what I wanted and he figured it out better than I could have imagined.", name: "Laura Martinez" },
    { message: "Delivered everything on time and went above and beyond. Truly outstanding.", name: "Daniel Brown" },
]

const Testemonials = () => {
    return (
         <div className="w-full max-w-77 md:max-w-120 rounded-lg overflow-hidden relative -z-20">
        <Swiper
            modules={[Autoplay]}
            loop={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className=" bg-secondary text-white"
             style={{ overflow: "hidden" }}
        >
            {tests.map((tes, i) => (
                <SwiperSlide
                    key={i}
                >
                    <div className="flex px-6 py-6 gap-8">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-accent xl:flex text-8xl w-16  h-16 xl:w-20 xl:h-20 "
                        >
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                        </svg>
                        <div className="flex flex-col gap-2">
                          <p>
                            {tes.message}
                        </p>
                        <p className="self-end text-accent font-semibold">
                            {tes.name}
                        </p>  
                        </div>
                        
                    </div>

                </SwiperSlide>
            ))}



        </Swiper>
        </div>
    )
}

export default Testemonials