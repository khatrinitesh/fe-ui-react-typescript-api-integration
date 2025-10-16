const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "2rem",
        padding: "1rem",
        background: "#f1f1f1",
        textAlign: "center",
      }}
    >
      <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
