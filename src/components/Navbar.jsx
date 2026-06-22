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
        padding: "10px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <img
          src={logo}
          alt="Oak & Vine Logo"
          style={{
            width: "95px",
            height: "95px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />

        <div>
          <h2
            style={{
              margin: 0,
              color: "white",
              fontSize: "1.8rem",
              lineHeight: "1",
            }}
          >
            Oak & Vine
          </h2>

          <p
            style={{
              margin: "6px 0 0 0",
              color: "#4caf50",
              fontSize: "0.85rem",
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
        href="http://localhost:5173#projects"
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
          padding: "12px 24px",
          borderRadius: "50px",
          fontWeight: "700",
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