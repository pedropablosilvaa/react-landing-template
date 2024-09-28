import { Flex} from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Common/Navbar";
import Banner from "../components/Common/Banner";
import BannerImage from "../assets/images/banner.jpg";
import About from "../components/Common/About"; // Importamos el componente "Acerca"
import KeyActionsWithVideo from "../components/Common/KeyActionsWithVideo";
import Footer from "../components/Common/Footer";
import ImageGallery from "../components/Common/ImageGallery"; // Importa el componente de la galería

// Definir la ruta de la landing page
export const Route = createFileRoute("/")({
  component: LandingPage,
});

// Componente de la Landing Page
function LandingPage() {
  return (
    <Flex direction="column" align="center" justify="center" bg="gray.100">
      {/* Navbar */}
      <Navbar />

      {/* Banner con imagen de fondo y texto centrado */}
      <div id="inicio" style={{ width: '100%' }}>
        <Banner title="Empresa: Acá debe ir un slogan" backgroundImage={BannerImage} />
      </div>

      {/* Sección Acerca */}
      <div id="about" style={{ width: '100%' }}>
        <About />
      </div>

      {/* Qué hacemos */}
      <div id="what-we-do" style={{ width: '100%' }}>
        <KeyActionsWithVideo />
      </div>

      {/* Galería */}
      <div id="gallery" style={{ width: '100%' }}>
        <ImageGallery />
      </div>

      {/* Footer y contacto */}
      <div id="contact" style={{ width: '100%' }}>
        <Footer />
      </div>
    </Flex>
  );
}

export default LandingPage;
