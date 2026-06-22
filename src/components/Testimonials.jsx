import { useState } from "react";

function Testimonials() {
  const [hovered, setHovered] = useState(null);

  const reviews = [
    {
      name: "Sarah M.",
      location: "Manchester",
      review:
        "Oak & Vine completely transformed our garden. The team were professional from start to finish and exceeded our expectations.",
    },
    {
      name: "James T.",
      location: "Stockport",
      review:
        "Fantastic communication, excellent workmanship and a stunning finished patio. Highly recommended.",
    },
    {
      name: "Rebecca L.",
      location: "Altrincham",
      review:
        "The artificial grass and fencing installation has completely changed our outdoor space. Couldn't be happier.",
    },
  ];

  return (
    <section
      style={{
        padding: "120px 20px",
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
          What Our Clients Say
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#999",
            marginBottom: "60px",
            lineHeight: "1.8",
          }}
        >
          Trusted by homeowners across Greater Manchester.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {reviews.map((review, index) => (
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
                padding: "35px",
                lineHeight: "1.8",
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
                  color: "#4caf50",
                  fontSize: "1.2rem",
                  marginBottom: "15px",
                }}
              >
                ⭐⭐⭐⭐⭐
              </div>

              <p
                style={{
                  color: "#ddd",
                }}
              >
                "{review.review}"
              </p>

              <div
                style={{
                  marginTop: "25px",
                }}
              >
                <h4
                  style={{
                    margin: 0,
                  }}
                >
                  {review.name}
                </h4>

                <span
                  style={{
                    color: "#888",
                    fontSize: "0.9rem",
                  }}
                >
                  {review.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;