function Stats() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#111",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
          textAlign: "center",
        }}
      >
        <div>
          <h2 style={{ color: "#4caf50", fontSize: "3rem" }}>
            250+
          </h2>
          <p>Projects Completed</p>
        </div>

        <div>
          <h2 style={{ color: "#4caf50", fontSize: "3rem" }}>
            15+
          </h2>
          <p>Years Experience</p>
        </div>

        <div>
          <h2 style={{ color: "#4caf50", fontSize: "3rem" }}>
            100%
          </h2>
          <p>Customer Satisfaction</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;