"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start 0.15", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const rotateZ = useTransform(scrollYProgress, [0,1], ["0deg", "90deg"]);

  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-hero-gradient overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">
              Version 2.0 is here
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-[24px]">
              Pathway to productivity
            </h1>

            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
            </p>

            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="max-md:mt-20 md:h-[648px] md:flex-1 relative">
            <motion.div
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 cursor-grab active:cursor-grabbing"
              animate={{
                translateY: [-30, 30],
              }}
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                duration: 2,
              }}
            >
              <Image
                src={cogImage}
                alt="Cog Image"
                draggable={false}
                className="h-full w-auto object-contain"
              />
            </motion.div>

            <motion.div
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              style={{ translateY, rotateZ }}
              className="hidden md:block -top-8 -left-32 md:absolute cursor-grab active:cursor-grabbing"
            >
              <Image
                src={cylinderImage}
                alt="Cylinder Image"
                width={220}
                height={220}
                draggable={false}
              />
            </motion.div>


            <motion.div
              className="hidden w-48 md:block top-[524px] left-[448px] rotate-[30deg] md:absolute cursor-grab active:cursor-grabbing"
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.5}
              style={{ translateY, rotateZ }}
            >
              <Image
                src={noodleImage}
                alt="Noodle Image"
                width={220}
                height={220}
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
