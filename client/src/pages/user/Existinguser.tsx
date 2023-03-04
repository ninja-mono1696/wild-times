import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast,
  useDisclosure,
  Box,
  Image,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import Day2nightTheme from "../../assets/day2night.png";
import winterTheme from "../../assets/winterTheme.png";
import { motion, isValidMotionProp } from "framer-motion";
import squid from "../../assets/Squid.png";
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const existingUser = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [select, setSelect] = useState(true);
  const [theme, setTheme] = useState("day2night");
  console.log(theme);
  const userFunc = () => {
    const payload = {
      name,
    };
    try {
      fetch(`https://shy-blue-elk-hem.cyclic.app/users/login`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.msg == "Player Not Found, Please register") {
            toast({
              status: "warning",
              duration: 3000,
              title: "Player not found!",
              isClosable: true,
            });
          }
          if (res.msg == "Player Found") {
            toast({
              status: "success",
              duration: 3000,
              title: "Player LoggedIn Successfully!",
              isClosable: true,
            });
            sessionStorage.setItem("user", JSON.stringify(res.data));
            sessionStorage.setItem("setTheme", theme);
            navigate("/game");
          }
          console.log(res);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
      alert("Something Wrong");
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Existing User</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(20px)" />
        <ModalContent bg={"#ff057a52"} color={"white"}>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Enter the user Name</FormLabel>
              <Input
                placeholder="Enter user name"
                type="name"
                value={name}
                _placeholder={{ color: "white" }}
                onChange={(e) => setName(e.target.value)}
              />
              <FormLabel mt={5}>Select Theme</FormLabel>
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                width={"100%"}
                m={"auto"}
              >
                <ChakraBox
                  initial={{ opacity: 0 }}
                  whileInView={{ y: [-100, 20], opacity: 1, scale: 2, x: 100 }}
                  transition={{
                    duration: "1.2",
                    delay: "0.5",
                  }}
                >
                  <Box
                    cursor={"pointer"}
                    width={"45%"}
                    border={select ? "3px solid white" : "none"}
                    onClick={() => {
                      setSelect(true);
                      setTheme("day2night");
                    }}
                  >
                    <Image src={Day2nightTheme}></Image>
                  </Box>
                </ChakraBox>
                <ChakraBox
                  initial={{ opacity: 0 }}
                  whileInView={{ y: [100, 20], opacity: 1, scale: 2, x: 100 }}
                  transition={{
                    duration: "1.2",
                    delay: "0.5",
                  }}
                >
                  <Box
                    cursor={"pointer"}
                    width={"45%"}
                    border={select ? "none" : "3px solid white"}
                    onClick={() => {
                      setSelect(false);
                      setTheme("winter");
                    }}
                  >
                    <Image src={winterTheme}></Image>
                  </Box>
                </ChakraBox>
              </Box>
            </FormControl>
          </ModalBody>
          <ModalFooter mt={10}>
            <Button
              type="submit"
              bg={"yellow.500"}
              color={"white"}
              _hover={{
                bg: "pink.600",
              }}
              onClick={userFunc}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default existingUser;
