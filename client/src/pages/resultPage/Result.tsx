import React from "react";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { VscDebugRestart } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

type ResultData = {
  score: number;
  result: string;
};

type userData = {
  _id: string;
  name: string;
  score: number;
  level: number;
};

const Result = () => {
  const navigate = useNavigate();
  const result: ResultData = JSON.parse(sessionStorage.getItem("result") || "");
  const name: userData = JSON.parse(sessionStorage.getItem("user") || "");

  return (
    <Box w="100%" h="100%">
      <Box
        w="50%"
        p={10}
        margin="auto"
        textAlign="center"
        backgroundColor="yellow.300"
        borderRadius={15}
        mt={"10%"}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          gap={3}
          marginBottom={10}
        >
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Avatar size={"xl"} name={name[0].name}></Avatar>
            <Text fontSize={"5xl"} textTransform={"uppercase"}>
              {name[0].name} {result.result}
            </Text>
          </Flex>
          <Text fontSize={"5xl"}>Score: {result.score}</Text>
        </Flex>
        <Flex
          w="60%"
          margin="auto"
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Button
            color="#fff"
            margin="auto"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            gap={2}
            borderRadius={8}
            backgroundColor="#20262E"
            border="1px solid black"
            fontSize={18}
            _hover={{ color: "black", background: "white" }}
            onClick={() => navigate("/game")}
          >
            <VscDebugRestart /> Play again
          </Button>
          <Button
            color="#fff"
            margin="auto"
            textAlign="center"
            borderRadius={8}
            border="1px solid black"
            backgroundColor="#20262E"
            fontSize={18}
            _hover={{ color: "black", background: "white" }}
            onClick={() => navigate("/leaderboard")}
          >
            Leaderboard
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Result;
