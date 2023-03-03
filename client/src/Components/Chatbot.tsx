import ChatBot from "react-simple-chatbot";

import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const SessionData: string = JSON.parse(sessionStorage.getItem("user") || "");

const steps = [
  {
    id: 1,
    message: `"${SessionData.toUpperCase()}" You Are Going to Defeated by Me!`,
    trigger: 2,
  },
  {
    id: 2,
    user: true,
    trigger: 3,
  },
  {
    id: 3,
    message: "Are You afraid of me! ha ha ha",
    trigger: 4,
  },
  {
    id: 4,
    user: true,
    trigger: 5,
  },
  {
    id: 5,
    message: `hahahahaha you are saying "{previousValue}", Return Back You Can't Win`,
    trigger: 6,
  },
  {
    id: 6,
    user: true,
    trigger: 7,
  },
  {
    id: 7,
    message: "Challenge Accepted !",
    trigger: 8,
  },
  {
    id: 8,
    user: true,
    trigger: 9,
  },
  {
    id: 9,
    message: "You Can't beat me! ha ha ha....",
    end: true,
  },
];

const config = {
  botAvatar: "https://i.ibb.co/mTRxM21/images.png",
  floating: true,
};

const Chatbot = () => {
  return (
    <Flex width="100%">
      <ChatBot steps={steps} {...config} />
    </Flex>
  );
};

export default Chatbot;
