function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 20px",
        background: "#0d0d0d",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}

        <div>
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
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
            Whether you're planning a complete garden
            transformation, new patio, fencing or artificial
            lawn installation, we'd love to hear about your
            project.
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

        {/* RIGHT SIDE */}

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            background: "#111",
            padding: "40px",
            borderRadius: "25px",
            border: "1px solid #222",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email Address"
            style={inputStyle}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            style={inputStyle}
          />

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
              fontSize: "1rem",
              transition: "0.3s",
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
  padding: "18px",
  borderRadius: "15px",
  border: "1px solid #222",
  background: "#0d0d0d",
  color: "white",
  fontSize: "1rem",
};

const infoBox = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "20px",
  padding: "25px",
  marginBottom: "20px",
};

export default Contact;