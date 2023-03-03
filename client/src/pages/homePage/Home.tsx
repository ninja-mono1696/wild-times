import React from "react";
import HomeVid from "./Home.mp4";
import { Box } from "@chakra-ui/layout";
const Home = () => {
  return (
    <>
      <Box width={"100%"} height={"100vh"}>
        <video
          src={HomeVid}
          muted
          autoPlay
          loop
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: -1,
            objectFit: "cover",
          }}
        ></video>
      </Box>
    </>
  );
};

export default Home;
