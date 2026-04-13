import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Termos from "./pages/Termos";
import Fontes from "./pages/Fontes";
import Contacto from "./pages/Contacto";
import Inscriptions from "./pages/admin/inscriptions"; 
import Feedbacks from "./pages/admin/Feedbacks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/termos" element={<Termos />} />
      <Route path="/fontes" element={<Fontes />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/admin/inscriptions" element={<Inscriptions />} />
      <Route path="/admin/feedbacks" element={<Feedbacks />} />
    </Routes>
  );
}

export default App;