import React from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Newuser from "../user/Newuser";
import Existinguser from "../user/Existinguser";

const Home = () => {
  return (
    <Box w="100%" h="100vh">
      <Image
        src={
          "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=MnwxM[…]nx8Z3JhZGllbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
        position="relative"
        width="100%"
        height="100%"
        zIndex="-1"
        objectFit="cover"
        alt="img"
      />

      <Box w="100%" position="absolute" zIndex="100" top="0" textAlign="center">
        <Box w="95%" paddingLeft={5} paddingRight={5} margin="auto">
          {/* <Navbar /> */}

          <Box padding={10} minHeight={500} textAlign="center">
            <Box margin="auto" p={5}>
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                gap={5}
              >
                <Newuser />
                <Existinguser />
              </Flex>
            </Box>
          </Box>

          {/* <Footer /> */}
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
