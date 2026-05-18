"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { StatsStrip } from "@/components/StatsStrip";
import { WorkSection } from "@/components/WorkSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <main style={{ background: "#0A0A0C", minHeight: "100vh" }}>
      <AnimatePresence>
        {!loaded && <LoadingScreen key="loader" onDone={handleDone} />}
      </AnimatePresence>

      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ScrollProgressBar />
          <Nav />
          <HeroSection />
          <StatsStrip />
          <WorkSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </motion.div>
      )}
    </main>
  );
}
