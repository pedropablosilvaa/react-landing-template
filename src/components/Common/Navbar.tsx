import React, { useState } from "react";
import { Box, Flex, Image, Link, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, Divider } from "@chakra-ui/react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IconType } from "react-icons";
import { FaHome, FaInfoCircle, FaNewspaper, FaRoute, FaSearchLocation } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";

interface MenuOption {
  text: string;
  icon: IconType;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOptions: MenuOption[] = [
    {
      text: "Inicio",
      icon: FaHome,
    },
    {
      text: "Sobre nosotros",
      icon: FaInfoCircle,
    },
    {
      text: "Qué hacemos",
      icon: FaNewspaper,
    },
    {
      text: "Galería",
      icon: FaRoute,
    },
    {
      text: "Contacto",
      icon: FaSearchLocation,
    },
  ];

  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      px={100} // Padding horizontal
      py={2} // Padding vertical
      bg="white"
      align="center"
      boxShadow="sm"
      zIndex="banner" // Ensure it stays on top
      width="100%">
      <Flex justify="space-between" align="center" width="100%">
        {/* Logo */}
        <Image src={Logo} alt="Logo" boxSize="50px" />

        {/* Navbar Links */}
        <Flex display={{ base: "none", md: "flex" }} align="center" gap={8}>
          <Link href="#inicio" fontSize="lg" fontFamily="math">Inicio</Link>
          <Link href="#about" fontSize="lg" fontFamily="math">Sobre nosotros</Link>
          <Link href="#what-we-do" fontSize="lg" fontFamily="math">Qué hacemos</Link>
          <Link href="#gallery" fontSize="lg" fontFamily="math">Galería</Link>
          <Link href="#contact" fontSize="lg" fontFamily="math">Contacto</Link>
        </Flex>

        {/* Mobile Menu Icon */}
        <IconButton
          aria-label="Open Menu"
          icon={<HiOutlineBars3 />}
          display={{ base: "block", md: "none" }}
          onClick={() => setIsOpen(true)}
          variant="ghost"
        />
      </Flex>

      {/* Drawer for Mobile Menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={() => setIsOpen(false)}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menú</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              {menuOptions.map((item) => (
                <Flex key={item.text} as="a" href="#" align="center" gap={2} w="full">
                  <Box as={item.icon} boxSize="20px" />
                  <Box>{item.text}</Box>
                </Flex>
              ))}
            </VStack>
            <Divider my={4} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
