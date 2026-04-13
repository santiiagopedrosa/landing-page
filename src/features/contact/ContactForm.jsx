import { getInscriptions, saveInscriptions } from "../../utils/storage";

export default function ContactForm() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newEntry = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      date: new Date().toISOString(),
    };

    const existing = getInscriptions();
    saveInscriptions([...existing, newEntry]);

    e.target.reset();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px" }}
    >
      <input name="name" type="text" placeholder="Nome" />
      <br /><br />

      <input name="email" type="email" placeholder="Email" />
      <br /><br />

      <textarea name="message" placeholder="Mensagem" />
      <br /><br />

      <button type="submit">Enviar</button>
    </form>
  );
}