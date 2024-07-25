"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import ProductShowcase from "@/sections/ProductShowcase";
import Pricing from "@/sections/Pricing";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
    </>
  );
}
