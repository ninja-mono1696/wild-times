import { Box, Td, Tr } from "@chakra-ui/react";
import React from "react";

type Props = {
  _id: string;
  name: string;
  score: number;
  level: number;
  index: number;
};

const LeaderboardCard = ({_id, index, name, score, level }: Props) => {
  console.log();
  return (
    <Tr>
      <Td>{index + 1}</Td>
      <Td>{name.toUpperCase()}</Td>
      <Td>{score}</Td>
      <Td>{level}</Td>
    </Tr>
  );
};

export default LeaderboardCard;
