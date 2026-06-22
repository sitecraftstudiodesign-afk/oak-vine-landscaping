function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid #222",
        padding: "80px 20px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "40px",
        }}
      >
        <div>
          <h2>Oak & Vine Landscaping</h2>

          <p
            style={{
              color: "#999",
              lineHeight: "1.8",
            }}
          >
            Professional landscaping, patios,
            fencing and garden transformations
            throughout Manchester.
          </p>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📞 0161 555 5678</p>
          <p>📧 info@oakandvine.co.uk</p>
        </div>

        <div>
          <h3>Services</h3>

          <p>Garden Design</p>
          <p>Patios & Paving</p>
          <p>Artificial Grass</p>
          <p>Fencing</p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #222",
          marginTop: "50px",
          paddingTop: "25px",
          textAlign: "center",
          color: "#666",
        }}
      >
        © 2025 Oak & Vine Landscaping. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;