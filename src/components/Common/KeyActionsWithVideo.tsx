import { Box, Flex, Text, Heading, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaLeaf, FaLandmark, FaMountain } from "react-icons/fa";
import BannerVideo from "../../assets/images/forest_video.mp4";

// Componente con el video de fondo y las cajas con información
const KeyActionsWithVideo = () => {
  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      >
        <source src={BannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Contenedor principal */}
      <Flex direction="column" align="center" justify="center" height="100vh" px={4} bg="rgba(0, 0, 0, 0.4)">
        
        <Heading as="h2" fontFamily="math" size="xl" mb={50} textAlign="center" color="white" zIndex=" 1" >
          ¿Qué hacemos en Tepualia?
        </Heading>

        {/* Grid con las cajas informativas */}
        <SimpleGrid columns={[1, null, 2, 3]} spacing={10} width="100%" maxWidth="1200px" textAlign="center">
          {/* Opción 1: Artículos de ciencias naturales */}
          <Box
            bg="gray.700"
            p={6}
            borderRadius="md"
            boxShadow="lg"
            color="white"
            opacity={0.85}
          >
            <Icon as={FaLeaf} w={10} h={10} color="green.300" />
            <Heading as="h3" size="md" mt={4} fontFamily="math">
              Ciencias Naturales
            </Heading>
            <Text mt={2}>
              Artículos con base científica sobre la biodiversidad, ecosistemas, y el entorno natural de Chiloé.
            </Text>
          </Box>

          {/* Opción 2: Artículos de ciencias sociales */}
          <Box
            bg="gray.700"
            p={6}
            borderRadius="md"
            boxShadow="lg"
            color="white"
            opacity={0.85}
          >
            <Icon as={FaLandmark} w={10} h={10} color="blue.300" />
            <Heading as="h3" size="md" mt={4} fontFamily="math">
              Ciencias Sociales
            </Heading>
            <Text mt={2}>
              Explora el patrimonio cultural, las tradiciones y la historia del archipiélago.
            </Text>
          </Box>

          {/* Opción 4: Atractivos turísticos */}
          <Box
            bg="gray.700"
            p={6}
            borderRadius="md"
            boxShadow="lg"
            color="white"
            opacity={0.85}
          >
            <Icon as={FaMountain} w={10} h={10} color="red.300" />
            <Heading as="h3" size="md" mt={4} fontFamily="math">
              Atractivos Turísticos
            </Heading>
            <Text mt={2}>
              Conoce los lugares más emblemáticos y turísticos que no puedes perderte en tu visita.
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default KeyActionsWithVideo;
