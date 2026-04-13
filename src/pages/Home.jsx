import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import ContactForm from "../features/contact/ContactForm";

export default function Home() {
  return (
    <MainLayout>
      <Hero />

      <section id="about" style={{ padding: "60px 20px" }}>
        <h2>Sobre</h2>
        <p>Este site demonstra uma experiência fluida e moderna.</p>
      </section>

      <section id="contact" style={{ padding: "60px 20px" }}>
        <h2>Contacto</h2>
        <ContactForm />
      </section>
    </MainLayout>
  );
}