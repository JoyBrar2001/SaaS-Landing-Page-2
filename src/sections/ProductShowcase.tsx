"use client";

import Image from "next/image";
import productImage from "@/assets/product-image.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export default function ProductShowcase() {
  const productRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollYImage } = useScroll({
    target: productRef,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: scrollYFull } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });

  const opacityValue = useTransform(scrollYImage, [0, 1], [0.4, 1]);
  const scaleValue = useTransform(scrollYImage, [0, 1], [0.8, 1]);
  const rotateXValue = useTransform(scrollYImage, [0, 1], [20, 0]);

  const translateYValue = useTransform(scrollYFull, [0, 1], [150, -150]);

  return (
    <section ref={productRef} className="bg-gradient-to-b from-[#FFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="flex justify-center">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
            Boost your productivity
          </div>
        </div>

        <div className="section-heading">
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>

          <p className="section-description mt-5">
            Effortlessly turn your ideas into fully functional, responsive, SaaS websites in just minutes with this template.
          </p>
        </div>

        <div className="relative">
          <motion.div
            className="mt-10"
            style={{
              opacity: opacityValue,
              scale: scaleValue,
              rotateX: rotateXValue,
              transformPerspective: "800px",
            }}
          >
            <Image
              src={productImage}
              alt="product image"
              draggable={false}
            />
          </motion.div>

          <motion.div
            className="absolute -right-36 -top-32 cursor-grab active:cursor-grabbing"
            style={{ translateY: translateYValue }}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
          >
            <Image
              src={pyramidImage}
              alt="Pyramid Image"
              draggable={false}
              height={262}
              width={262}
            />
          </motion.div>

          <motion.div
            className="absolute bottom-24 -left-36 cursor-grab active:cursor-grabbing"
            style={{ translateY: translateYValue }}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
          >
            <Image
              src={tubeImage}
              alt="Tube Image"
              draggable={false}
              height={262}
              width={262}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
