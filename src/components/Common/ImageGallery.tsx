import React, { useState } from "react";
import {
  Box,
  Image,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Image1 from "../../assets/images/gallery_image_1.jpg";
import Image2 from "../../assets/images/gallery_image_2.jpg";
import Image3 from "../../assets/images/gallery_image_3.jpg";
import Image4 from "../../assets/images/gallery_image_4.jpg";
import Image5 from "../../assets/images/gallery_image_5.jpg";
import Image6 from "../../assets/images/gallery_image_6.jpg";

const GaleriaImagenes: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string>("");

  // Array de imágenes con las rutas correctas
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    onOpen();
  };

  return (
    <Box py={10} px={4}>
      <SimpleGrid columns={[1, null, 2, 3]} spacing={10}>
        {images.map((imageSrc, index) => (
          <Box
            key={index}
            cursor="pointer"
            onClick={() => handleImageClick(imageSrc)}
            boxShadow="md"
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            <Image
              src={imageSrc}
              alt={`Imagen ${index + 1}`}
              objectFit="cover"
              width="100%"
              height="300px"
              borderRadius="md"
              loading="lazy" // Optimización con Lazy Loading
            />
          </Box>
        ))}
      </SimpleGrid>

      {/* Modal para agrandar la imagen */}
      <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
        <ModalOverlay />
        <ModalContent maxW="90vw"> {/* Hacemos que la imagen ocupe casi toda la ventana */}
          <ModalCloseButton />
          <ModalBody p={0}>
            <Image src={selectedImage} alt="Agrandar imagen" width="100%" height="auto" borderRadius="md" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default GaleriaImagenes;
