"use client";
import {motion} from "framer-motion"
const recVariants={
initial:{
    y:"-100%",
    height:"100%"
},
animate:{
y:"0%",
height:"0%"
},
exit:{
    y:["0%" , "-100%"],
    height:["0%" , "100%"]
}
}

const Rectangle = () => {
  return (
    <> 
    <motion.div
    variants={recVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{delay:0 , 
        duration:0.3 ,
        ease:"easeInOut"
    }}
    className="fixed top-full left-0 w-screen h-screen z-30 bg-[#1b1b1b]"
    />
      <motion.div
    variants={recVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{delay:0.2 , 
        duration:0.4 ,
        ease:"easeInOut"
    }}
    className="fixed top-full  left-0 w-screen h-screen z-20 bg-[#111112]"
    />
    </>
   
  )
}

export default Rectangle