import { Box, Td, Tr } from "@chakra-ui/react";
import React from "react";

type Props = {
  _id: number;
  name: string;
  score: number;
  level: number;
};

const LeaderboardCard = ({ _id, name, score, level }: Props) => {
  console.log();
  return (
    <Tr>
      <Td>{_id}</Td>
      <Td>{name.toUpperCase()}</Td>
      <Td>{score}</Td>
      <Td>{level}</Td>
    </Tr>
  );
};

export default LeaderboardCard;
