import React from "react";
import { Box, Flex, Text, Link, Icon, Divider, Stack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <Box bg="white" color="black" py={10} fontFamily="Math" width="100vw">
      {/* Contenedor principal */}
      <Flex direction="column" align="center" justify="center" maxW="1200px" mx="auto" px={4} width="100%">
        {/* Enlaces a las secciones principales */}
        <Stack direction={["column", "row"]} spacing={8} mb={4}>
        <Link href="/" _hover={{ textDecoration: "underline" }}>
            Inicio
          </Link>
          <Link href="/about" _hover={{ textDecoration: "underline" }}>
            Más sobre Tepualia
          </Link>
          <Link href="/articles" _hover={{ textDecoration: "underline" }}>
            Artículos
          </Link>
          <Link href="/trails" _hover={{ textDecoration: "underline" }}>
            Senderos
          </Link>
          <Link href="/attractions" _hover={{ textDecoration: "underline" }}>
            Atractivos turísticos
          </Link>
        </Stack>

        <Divider borderColor="gray.300" />

        {/* Información de contacto */}
        <Text mt={4} fontSize="sm">
          Contacto: info@tepualia.cl
        </Text>

        {/* Redes sociales */}
        <Flex mt={4} justify="center" gap={6}>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} boxSize={6} color="green.500" _hover={{ color: "green.600" }} />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} boxSize={6} color="green.500" _hover={{ color: "green.600" }} />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} boxSize={6} color="green.500" _hover={{ color: "green.600" }} />
          </Link>
        </Flex>

        {/* Copyright */}
        <Text mt={6} fontSize="xs" textAlign="center">
          &copy; {new Date().getFullYear()} Tepualia. Todos los derechos reservados.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
