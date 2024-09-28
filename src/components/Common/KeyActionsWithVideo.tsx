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
          ¿Qué hacemos en ESTA EMPRESA?
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
              Acción 1
            </Heading>
            <Text mt={2}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
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
              Acción 2
            </Heading>
            <Text mt={2}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              Acción 3
            </Heading>
            <Text mt={2}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default KeyActionsWithVideo;
