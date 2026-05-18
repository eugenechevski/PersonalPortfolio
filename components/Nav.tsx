"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { NAV_ITEMS } from "@/lib/constants";

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-5 flex flex-col justify-between">
      <span
        style={{
          display: "block",
          height: 1.5,
          width: "100%",
          background: "#fff",
          borderRadius: 2,
          transition: "all 0.3s ease",
          transform: open ? "rotate(45deg) translateY(7px)" : "none",
          transformOrigin: "center",
        }}
      />
      <span
        style={{
          display: "block",
          height: 1.5,
          width: "100%",
          background: "#fff",
          borderRadius: 2,
          transition: "all 0.3s ease",
          opacity: open ? 0 : 1,
        }}
      />
      <span
        style={{
          display: "block",
          height: 1.5,
          width: "100%",
          background: "#fff",
          borderRadius: 2,
          transition: "all 0.3s ease",
          transform: open ? "rotate(-45deg) translateY(-7px)" : "none",
          transformOrigin: "center",
        }}
      />
    </div>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between h-[72px]"
        style={{
          padding: "0 clamp(24px, 5vw, 80px)",
          background:
            scrolled || mobileOpen ? "rgba(10,10,12,0.95)" : "transparent",
          backdropFilter:
            scrolled || mobileOpen ? "blur(20px) saturate(1.4)" : "none",
          borderBottom:
            scrolled || mobileOpen
              ? "1px solid rgba(255,255,255,0.06)"
              : "1px solid transparent",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <a href="#top" className="flex items-center gap-3 text-white">
          <Logo size={36} />
          <span
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: 15,
              letterSpacing: 3,
              textTransform: "uppercase",
              opacity: scrolled ? 1 : 0,
              transform: scrolled ? "translateX(0)" : "translateX(-8px)",
              transition: "all 0.4s ease",
            }}
          >
            Eugene Chevski
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 13,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                padding: "4px 0",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "#E8C547";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color =
                  "rgba(255,255,255,0.55)";
              }}
            >
              {item}
            </a>
          ))}
          {[
            {
              href: "https://github.com/eugenechevski",
              label: "GitHub",
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              ),
            },
            {
              href: "https://www.linkedin.com/in/eugenechevski/",
              label: "LinkedIn",
              icon: (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.5)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "#E8C547";
                el.style.color = "#E8C547";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255,255,255,0.15)";
                el.style.color = "rgba(255,255,255,0.5)";
              }}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          style={{ background: "transparent", border: "none", cursor: "pointer" }}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] md:hidden"
            style={{
              background: "rgba(10,10,12,0.98)",
              backdropFilter: "blur(24px)",
              paddingTop: 72,
            }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-10 -mt-[72px]">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 24,
                    letterSpacing: 6,
                    textTransform: "uppercase",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontWeight: 400,
                  }}
                >
                  {item}
                </motion.a>
              ))}

              <motion.div
                className="flex gap-6 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://github.com/eugenechevski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  aria-label="GitHub"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/eugenechevski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  aria-label="LinkedIn"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:eugenechevski@proton.me"
                  className="flex items-center justify-center w-12 h-12 rounded-full"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  aria-label="Email"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 6L2 7" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
