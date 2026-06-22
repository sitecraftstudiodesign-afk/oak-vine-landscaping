function Contact() {
  const mobile = window.innerWidth <= 768;

  return (
    <section
      id="contact"
      style={{
        padding: mobile ? "90px 16px" : "120px 20px",
        background: "#0d0d0d",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "repeat(auto-fit,minmax(350px,1fr))",
          gap: mobile ? "32px" : "50px",
          alignItems: "center",
          textAlign: mobile ? "center" : "left",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: mobile ? "520px" : "none",
            margin: mobile ? "0 auto" : "0",
          }}
        >
          <h2
            style={{
              fontSize: mobile ? "2.2rem" : "3rem",
              marginBottom: "20px",
              lineHeight: "1.15",
            }}
          >
            Get Your Free Quote
          </h2>

          <p
            style={{
              color: "#999",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}
          >
            Whether you're planning a complete garden transformation, new patio,
            fencing or artificial lawn installation, we'd love to hear about
            your project.
          </p>

          <div style={infoBox}>
            <h3>📞 Call Us</h3>
            <p>07400 123456</p>
          </div>

          <div style={infoBox}>
            <h3>📧 Email Us</h3>
            <p>info@oakandvine.co.uk</p>
          </div>

          <div style={infoBox}>
            <h3>📍 Service Area</h3>
            <p>Manchester & Surrounding Areas</p>
          </div>
        </div>

        <form
          style={{
            width: "100%",
            maxWidth: mobile ? "520px" : "none",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            background: "#111",
            padding: mobile ? "28px 18px" : "40px",
            borderRadius: "25px",
            border: "1px solid #222",
            boxSizing: "border-box",
          }}
        >
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Email Address" style={inputStyle} />
          <input type="tel" placeholder="Phone Number" style={inputStyle} />

          <textarea
            placeholder="Tell us about your project..."
            rows="6"
            style={inputStyle}
          />

          <button
            style={{
              padding: "18px",
              borderRadius: "50px",
              border: "none",
              background: "#4caf50",
              color: "white",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: mobile ? "0.95rem" : "1rem",
              transition: "0.3s",
              width: "100%",
            }}
          >
            Request Free Quote →
          </button>
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  borderRadius: "15px",
  border: "1px solid #222",
  background: "#0d0d0d",
  color: "white",
  fontSize: "1rem",
  boxSizing: "border-box",
};

const infoBox = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "20px",
  padding: "25px",
  marginBottom: "20px",
  boxSizing: "border-box",
};

export default Contact;