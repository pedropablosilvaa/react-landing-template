import "./App.css";
import Inicio from "./Components/Inicio";
import Acerca from "./Components/Acerca";
import Trabajo from "./Components/Trabajo";
import Testimonios from "./Components/Testimonios";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Inicio />
      <Acerca />
      <Trabajo />
      <Testimonios />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
