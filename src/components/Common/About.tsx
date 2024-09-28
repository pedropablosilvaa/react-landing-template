import { Box, Flex, Text, Heading, Button, Container } from "@chakra-ui/react";

const About = () => {
  return (
    <Box position="relative" width="100%" bg="gray.100" py={12}>

      <Flex  align="center" justify="center" maxWidth="1200px" mx="auto" px={6}>

        {/* Texto descriptivo */}
        <Box flex="1" textAlign= "center">
          <Text fontFamily="math" fontSize="xl" color="teal.500" fontWeight="bold" mb={10}>
            Sobre nosotros
          </Text>
          <Heading fontFamily="math" as="h1" size="2xl" mb={10}>
            Chiloé es más que una postal
          </Heading>
            <Container maxW='3xl' fontFamily ="math" fontSize="xl" color="gray.600" mb={10}>
                En Tepualia nos dedicamos a difundir el valor natural y cultural del Archipiélago de Chiloé. 
                A través de información científica sobre naturaleza, ciencias sociales y rutas turísticas  
                promovemos el turismo responsable, el respeto por el entorno y el sentido de pertenencia territorial. 
                Queremos que tanto residentes como visitantes comprendan y aprecien la riqueza de este lugar único.
            </Container>
          {/*<Text fontFamily="math" fontSize="xl" color="gray.600" mb={10}>
            
          </Text>*/}

          {/* Botones */}
            <Button colorScheme="teal" variant="solid" >
              Más Información
            </Button  >
            {/*<Button leftIcon={<Icon as={BsFillPlayCircleFill} />} colorScheme="orange" variant="outline">
              Mira este video
            </Button> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
