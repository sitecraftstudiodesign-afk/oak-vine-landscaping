import { useState } from "react";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        background: "rgba(10,10,10,0.9)",
        backdropFilter: "blur(10px)",
        padding: window.innerWidth <= 768 ? "16px" : "10px 40px",
        display: "flex",
        flexDirection: window.innerWidth <= 768 ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: window.innerWidth <= 768 ? "14px" : "0",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
          alignItems: "center",
          gap: window.innerWidth <= 768 ? "10px" : "18px",
        }}
      >
        <img
          src={logo}
          alt="Oak & Vine Logo"
          style={{
            width: window.innerWidth <= 768 ? "78px" : "95px",
            height: window.innerWidth <= 768 ? "78px" : "95px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />

        <div>
          <h2
            style={{
              margin: 0,
              color: "white",
              fontSize: window.innerWidth <= 768 ? "1.35rem" : "1.8rem",
              lineHeight: "1",
            }}
          >
            Oak & Vine
          </h2>

          <p
            style={{
              margin: "6px 0 0 0",
              color: "#4caf50",
              fontSize: window.innerWidth <= 768 ? "0.75rem" : "0.85rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            Landscaping
          </p>
        </div>
      </div>

      <a
        href="https://sitecraft-studio-liart.vercel.app#projects"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setPressed(false);
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        style={{
          background: hovered
            ? "linear-gradient(135deg,#4caf50,#7bd88f)"
            : "#4caf50",
          color: "white",
          textDecoration: "none",
          padding: window.innerWidth <= 768 ? "12px 18px" : "12px 24px",
          borderRadius: "50px",
          fontWeight: "700",
          fontSize: window.innerWidth <= 768 ? "0.85rem" : "1rem",
          whiteSpace: "nowrap",
          transition: "all 0.25s ease",
          transform: pressed
            ? "scale(0.95)"
            : hovered
            ? "translateY(-3px)"
            : "translateY(0)",
          boxShadow: hovered
            ? "0 12px 30px rgba(76,175,80,0.35)"
            : "none",
        }}
      >
        ← Back To SiteCraft Studio
      </a>
    </nav>
  );
}

export default Navbar;