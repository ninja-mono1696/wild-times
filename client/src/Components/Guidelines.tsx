import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    UnorderedList,
    ListItem
  } from '@chakra-ui/react'

const Guidelines = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    React.useEffect(()=>{
          onOpen()
    },[])
  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(20px)" />
        <ModalContent bg={"#ff057a52"} color={"white"}>
          <ModalHeader>HOW TO PLAY??</ModalHeader>
          <ModalCloseButton />
          <ModalBody color={"white"}>
             <UnorderedList>
                <ListItem>On pressing of the mouse button the player will move forward and on releasing the mouse button the player will stop.</ListItem>
                <ListItem>
                The speed of the obstacles keeps on increasing as the player move forward.
                </ListItem>
                <ListItem>The player has to save himself/herself from the obstacles to reach the goal.</ListItem>
                <ListItem>If the player gets touched with any obstacles, the game is over.</ListItem>
             </UnorderedList>
          </ModalBody>

          <ModalFooter>
            <Button  bg={"yellow.500"}
              color={"white"}
              _hover={{
                bg: "pink.600",
              }} mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Guidelines