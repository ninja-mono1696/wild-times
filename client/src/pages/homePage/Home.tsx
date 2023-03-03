import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import bgVideo from "../../assets/bg_video.mp4";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <Box w="100%" h="100vh">
      <video
        src={bgVideo}
        muted
        autoPlay
        loop
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: "1",
          objectFit: "cover",
        }}></video>

      <Box w="100%" position="absolute" zIndex="100" top="0" textAlign="center">
        <Box w="95%" paddingLeft={5} paddingRight={5} margin="auto">
          <Navbar />

          <Box padding={10} minHeight={500} textAlign="center">
            <Box margin="auto" p={5}>
              <h1>Bird Arcade Game</h1>
              <p> Play and try to get the highest score.</p>

              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                gap={5}>
                <Button>New User</Button>
                <Button>Existing User</Button>
              </Flex>
            </Box>
          </Box>

          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
