import before1 from "../assets/before1.jpg";
import after1 from "../assets/after1.jpg";

function BeforeAfter() {
  return (
    <section
      style={{
        padding: "120px 20px",
        background: "#111",
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
          Before & After Transformations
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
          See the difference professional landscaping can
          make to your outdoor space.
        </p>

        <div
          style={{
            background: "#0d0d0d",
            borderRadius: "25px",
            overflow: "hidden",
            border: "1px solid #222",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <img
                src={before1}
                alt="Before"
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  background: "#222",
                  padding: "8px 16px",
                  borderRadius: "50px",
                  fontWeight: "700",
                }}
              >
                BEFORE
              </div>
            </div>

            <div
              style={{
                position: "relative",
              }}
            >
              <img
                src={after1}
                alt="After"
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  background: "#4caf50",
                  padding: "8px 16px",
                  borderRadius: "50px",
                  fontWeight: "700",
                }}
              >
                AFTER
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "35px",
            }}
          >
            <h3>Complete Garden Transformation</h3>

            <p
              style={{
                color: "#aaa",
                lineHeight: "1.8",
              }}
            >
              This project involved removing an outdated
              garden layout and replacing it with a modern
              landscaped space featuring new paving,
              planting and outdoor living areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;