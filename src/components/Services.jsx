import { useState } from "react";

function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="services"
      style={{
        padding: "120px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "20px",
        }}
      >
        Our Services
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#999",
          maxWidth: "700px",
          margin: "0 auto 60px auto",
          lineHeight: "1.8",
        }}
      >
        From complete garden transformations to patios,
        fencing and outdoor living spaces.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        <div
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            ...card,
            transform:
              hoveredCard === 1
                ? "translateY(-8px)"
                : "translateY(0)",
            border:
              hoveredCard === 1
                ? "1px solid #4caf50"
                : "1px solid #222",
            boxShadow:
              hoveredCard === 1
                ? "0 15px 35px rgba(76,175,80,0.15)"
                : "none",
          }}
        >
          <h3>🌿 Garden Design</h3>
          <p>
            Bespoke garden layouts designed to transform
            your outdoor space.
          </p>
        </div>

        <div
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            ...card,
            transform:
              hoveredCard === 2
                ? "translateY(-8px)"
                : "translateY(0)",
            border:
              hoveredCard === 2
                ? "1px solid #4caf50"
                : "1px solid #222",
            boxShadow:
              hoveredCard === 2
                ? "0 15px 35px rgba(76,175,80,0.15)"
                : "none",
          }}
        >
          <h3>🧱 Patios & Paving</h3>
          <p>
            High-quality paving and patio installations
            built to last.
          </p>
        </div>

        <div
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            ...card,
            transform:
              hoveredCard === 3
                ? "translateY(-8px)"
                : "translateY(0)",
            border:
              hoveredCard === 3
                ? "1px solid #4caf50"
                : "1px solid #222",
            boxShadow:
              hoveredCard === 3
                ? "0 15px 35px rgba(76,175,80,0.15)"
                : "none",
          }}
        >
          <h3>🌱 Artificial Grass</h3>
          <p>
            Low-maintenance lawns with a natural look
            all year round.
          </p>
        </div>

        <div
          onMouseEnter={() => setHoveredCard(4)}
          onMouseLeave={() => setHoveredCard(null)}
          style={{
            ...card,
            transform:
              hoveredCard === 4
                ? "translateY(-8px)"
                : "translateY(0)",
            border:
              hoveredCard === 4
                ? "1px solid #4caf50"
                : "1px solid #222",
            boxShadow:
              hoveredCard === 4
                ? "0 15px 35px rgba(76,175,80,0.15)"
                : "none",
          }}
        >
          <h3>🪵 Fencing</h3>
          <p>
            Secure and stylish fencing solutions for
            homes and businesses.
          </p>
        </div>
      </div>
    </section>
  );
}

const card = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "25px",
  padding: "35px",
  lineHeight: "1.8",
  transition: "all 0.3s ease",
  cursor: "pointer",
};

export default Services;