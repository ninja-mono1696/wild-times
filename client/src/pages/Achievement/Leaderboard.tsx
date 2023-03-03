import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LeaderboardCard from "./LeaderboardCard";
import bgVideo from "./bg_video.mp4";
import axios from "axios";
import { useNavigate } from "react-router";

type userData = {
  _id: string;
  name: string;
  score: number;
  level: number;
};

const Achievement = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    try {
      axios.get(`https://shy-blue-elk-hem.cyclic.app/users/`).then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Box textAlign={"center"}>
      <Box height={"100vh"} width={"100%"}>
        <Box
          position={"absolute"}
          top={"5%"}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading>LEADERBOARD</Heading>
        </Box>

        <video
          src={bgVideo}
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
        <Box
          position={"absolute"}
          top={"15%"}
          // left={50}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          // mt={10}
        >
          {/* box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; */}
          <TableContainer
            bg={"#00b7ff96"}
            borderRadius={"10px"}
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
            width={{ base: "95%", md: "70%", lg: "50%" }}
          >
            <Table fontWeight={"bold"} variant="simple" textAlign={"center"}>
              <Thead>
                <Tr>
                  <Th fontSize={"18px"}>S.NO.</Th>
                  <Th fontSize={"18px"}>NAME</Th>
                  <Th fontSize={"18px"}>SCORE</Th>
                  <Th fontSize={"18px"}>LEVEL</Th>
                </Tr>
              </Thead>
              <Tbody textAlign={"center"}>
                {data.map((el, index) => (
                  <LeaderboardCard key={el._id} {...el} index={index} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Button
            onClick={() => {
              navigate("/");
            }}
            colorScheme="yellow"
            position={"absolute"}
            bottom={-20}
          >
            HOME
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Achievement;
