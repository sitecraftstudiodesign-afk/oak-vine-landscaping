function FloatingQuote() {
  return (
    <a
      href="#contact"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        background: "#4caf50",
        color: "white",
        textDecoration: "none",
        padding: "16px 24px",
        borderRadius: "50px",
        fontWeight: "700",
        boxShadow: "0 0 30px rgba(76,175,80,0.4)",
        zIndex: "9999",
        transition: "all 0.3s ease",
      }}
    >
      🌿 Free Quote
    </a>
  );
}

export default FloatingQuote;