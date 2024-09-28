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
export const Route = createFileRoute("/landing-page")({
  component: LandingPage,
});

// Componente de la Landing Page
function LandingPage() {
  return (
    <Flex direction="column" align="center" justify="center" bg="gray.100">
      {/* Navbar */}
      <Navbar />

      {/* Banner con imagen de fondo y texto centrado */}
      <Banner
        title="Tepualia: Explorando el Archipiélago de Chiloé"
        backgroundImage={BannerImage} // Cambia la URL por la imagen que desees
      />

      {/* Sección Acerca */}
      <About />  {/* Aquí se añade la nueva sección */}

      <KeyActionsWithVideo />

      <ImageGallery />

      <Footer />  

    </Flex>
  );
}

export default LandingPage;
