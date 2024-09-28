import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";

interface BannerProps {
  title: string;
  backgroundImage: string;
}

const Banner: React.FC<BannerProps> = ({ title, backgroundImage }) => {
  return (
    <Box
      height="100vh"
      width="100%"
      backgroundImage={`url(${backgroundImage})`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex justify="center" align="center" height="100vh" bg="rgba(0, 0, 0, 0.5)" width="100%">
        <Heading as="h1" size="4xl" color="white" textAlign="center" fontFamily="math">
          {title}
        </Heading>
      </Flex>
    </Box>
  );
};

export default Banner;
