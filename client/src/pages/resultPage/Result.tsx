import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { VscDebugRestart } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const result = JSON.parse(sessionStorage.getItem("result"));
  const name = JSON.parse(sessionStorage.getItem("user"));

  return (
    <Box w="100%" h="100%">
      <Box
        w="50%"
        h={300}
        p={10}
        margin="200px auto"
        textAlign="center"
        backgroundColor="#ECF2FF"
        borderRadius={15}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          gap={3}
          marginBottom={10}
        >
          <h1 style={{ fontSize: "32px" }}>
            `${name.name} ${result.result}`
          </h1>
          <h3 style={{ fontSize: "26px" }}>Score: {result.score}</h3>
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
