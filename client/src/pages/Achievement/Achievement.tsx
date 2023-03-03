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
} from "@chakra-ui/react";
import React from "react";
import AchievementCard from "./AchievementCard";
import bgVideo from "./bg_video.mp4";

const Achievement = () => {
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
          <Heading>Achievement</Heading>
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
            bg={"white"}
            borderRadius={"10px"}
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
            width={{ base: "95%", md: "70%", lg: "50%" }}
          >
            <Table variant="simple" textAlign={"center"}>
              <Thead>
                <Tr>
                  <Th>S.NO.</Th>
                  <Th>NAME</Th>
                  <Th>SCORE</Th>
                  <Th>LEVEL</Th>
                </Tr>
              </Thead>
              <Tbody>
                <AchievementCard _id={1} name={"sam"} score={2} level={2} />
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Achievement;
