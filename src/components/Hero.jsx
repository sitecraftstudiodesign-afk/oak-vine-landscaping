function Hero() {
  return (
    <section
      style={{
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        background:
          "linear-gradient(to bottom, #0f1a12, #111)",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "12px 24px",
            borderRadius: "999px",
            background: "rgba(76,175,80,0.15)",
            border: "1px solid rgba(76,175,80,0.25)",
            color: "#4caf50",
            marginBottom: "30px",
          }}
        >
          🌿 Premium Landscaping Services
        </div>

        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: "1",
            marginBottom: "30px",
          }}
        >
          Transform Your
          <br />
          Outdoor Space
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#b5b5b5",
            lineHeight: "1.9",
            fontSize: "1.2rem",
          }}
        >
          Oak & Vine Landscaping creates beautiful
          gardens, patios and outdoor living spaces
          throughout Manchester and surrounding areas.
        </p> 
        <div
  style={{
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  }}
>
  <a
    href="#contact"
    style={{
      textDecoration: "none",
      padding: "18px 42px",
      borderRadius: "50px",
      background: "#4caf50",
      color: "white",
      fontWeight: "700",
      boxShadow: "0 0 25px rgba(76,175,80,0.35)",
      transition: "0.3s ease",
    }}
  >
    Get Free Quote
  </a>

  <a
    href="#projects"
    style={{
      textDecoration: "none",
      padding: "18px 42px",
      borderRadius: "50px",
      border: "1px solid #333",
      color: "white",
      fontWeight: "700",
      transition: "0.3s ease",
    }}
  >
    View Projects
  </a>
</div>
      </div>
    </section>
  );
}

export default Hero;