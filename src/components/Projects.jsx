import { useState } from "react";

import garden1 from "../assets/garden1.jpg";
import patio1 from "../assets/patio1.jpg";
import grass1 from "../assets/grass1.jpg";

function Projects() {
  const [hovered, setHovered] = useState(null);

  const projects = [
    {
      title: "Modern Garden Transformation",
      location: "Manchester",
      description:
        "Complete redesign featuring paving, planting, outdoor seating and decorative lighting.",
      image: garden1,
    },
    {
      title: "Luxury Patio Installation",
      location: "Stockport",
      description:
        "Premium stone patio installation with integrated lighting and drainage solutions.",
      image: patio1,
    },
    {
      title: "Low Maintenance Garden",
      location: "Altrincham",
      description:
        "Artificial grass installation with modern fencing, borders and planting areas.",
      image: grass1,
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "120px 20px",
        background: "#0d0d0d",
      }}
    >
      <div
        style={{
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
          Recent Projects
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
          A selection of our recent landscaping and garden
          transformation projects completed across Greater
          Manchester.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#111",
                border:
                  hovered === index
                    ? "1px solid #4caf50"
                    : "1px solid #222",
                borderRadius: "25px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                transform:
                  hovered === index
                    ? "translateY(-8px)"
                    : "translateY(0)",
                boxShadow:
                  hovered === index
                    ? "0 20px 40px rgba(76,175,80,0.15)"
                    : "none",
              }}
            >
              <div
                style={{
                  height: "240px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    transform:
                      hovered === index
                        ? "scale(1.08)"
                        : "scale(1)",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "30px",
                }}
              >
                <span
                  style={{
                    color: "#4caf50",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  {project.location}
                </span>

                <h3
                  style={{
                    marginTop: "10px",
                    marginBottom: "15px",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "#aaa",
                    lineHeight: "1.8",
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    marginTop: "25px",
                    color: "#4caf50",
                    fontWeight: "700",
                  }}
                >
                  View Project →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
