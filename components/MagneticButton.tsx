"use client";

import { useRef, useState, useCallback } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  filled?: boolean;
  className?: string;
}

export function MagneticButton({
  children,
  href,
  filled = false,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const onMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setOffset({
        x: (clientX - cx) * 0.2,
        y: (clientY - cy) * 0.2,
      });
    });
  }, []);

  const onLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setOffset({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  const isExternal = href?.startsWith("http");
  const isMailto = href?.startsWith("mailto:");

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isMailto && href) {
        e.preventDefault();
        window.location.href = href;
      }
    },
    [href, isMailto]
  );

  return (
    <a
      ref={ref}
      href={href}
      target={isExternal && !isMailto ? "_blank" : undefined}
      rel={isExternal && !isMailto ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "16px 36px",
        borderRadius: 100,
        fontSize: 13,
        textTransform: "uppercase",
        letterSpacing: 1.5,
        fontWeight: 500,
        cursor: "pointer",
        textDecoration: "none",
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition:
          "transform 0.15s ease-out, background 0.3s, border-color 0.3s, color 0.3s",
        ...(filled
          ? {
              background: hovered ? "#f0d050" : "#E8C547",
              color: "#0A0A0C",
              border: "1px solid transparent",
            }
          : {
              border: "1px solid rgba(255,255,255,0.2)",
              background: hovered
                ? "rgba(255,255,255,0.06)"
                : "transparent",
              color: "#fff",
            }),
      }}
    >
      {children}
    </a>
  );
}
