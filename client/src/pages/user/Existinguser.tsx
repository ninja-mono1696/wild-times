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
} from "@chakra-ui/react";

const existingUser = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <ModalOverlay />
        <ModalContent>
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
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              bg={"blue.500"}
              color={"white"}
              _hover={{
                bg: "blue.600",
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
