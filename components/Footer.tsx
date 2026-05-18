import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer
      className="flex justify-between items-center flex-wrap gap-4 mx-auto"
      style={{
        padding: "40px clamp(24px, 5vw, 80px)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        maxWidth: 1200,
      }}
    >
      <div className="flex items-center gap-3">
        <Logo size={24} />
        <span
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.2)",
            letterSpacing: 1,
          }}
        >
          &copy; 2026 Eugene Chevski
        </span>
      </div>
      <div
        style={{
          fontSize: 12,
          color: "rgba(255,255,255,0.15)",
          letterSpacing: 1,
        }}
      >
        Miami, FL &middot; Built with intention
      </div>
    </footer>
  );
}
