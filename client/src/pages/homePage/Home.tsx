import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Newuser from "../user/Newuser";
import Existinguser from "../user/Existinguser";
import squidPic from "../../assets/squidGame.jpg";
import styles from "./Home.module.css";
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Home = () => {
  return (
    <Box w="100%" h="100vh" className={styles.headStyle}>
      <Image
        src={squidPic}
        position="relative"
        width="100%"
        height="100%"
        zIndex="-1"
        objectFit="cover"
        alt="img"
      />

      <Box
        position={"absolute"}
        top={"5%"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text color={"pink.700"} fontSize={"6xl"}>
          ...WILD TIMES...
        </Text>
      </Box>

      <Box
        position="absolute"
        zIndex="100"
        top="25%"
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          width={"30%"}
          height={"100px"}
          bg={"#ff004c85"}
          borderRadius={"10px"}
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={5}
        >
          <ChakraBox
            initial={{ opacity: 0 }}
            whileInView={{ x: [-100, 0], opacity: 1 }}
            transition={{
              duration: "1.2",
              delay: "0.5",
            }}
          >
            <Newuser />
          </ChakraBox>
          <ChakraBox
            initial={{ opacity: 0 }}
            whileInView={{ x: [100, 0], opacity: 1 }}
            transition={{
              duration: "1.2",
              delay: "0.5",
            }}
          >
            <Existinguser />
          </ChakraBox>
        </Flex>
      </Box>
    </Box>
  );
};
export default Home;
