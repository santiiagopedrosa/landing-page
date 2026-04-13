export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      <h2>Meu Site</h2>

      <nav className="nav">
        <button onClick={() => scrollToSection("hero")}>Home</button>
        <button onClick={() => scrollToSection("about")}>Sobre</button>
        <button onClick={() => scrollToSection("contact")}>Contacto</button>
      </nav>
    </header>
  );
}