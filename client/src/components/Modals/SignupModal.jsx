import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure
} from '@chakra-ui/react';

function SignupModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="newCustomGreen.600">
        <ModalHeader>Sign up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input color="black" placeholder="username" />
          </FormControl>
          <FormControl mt={5}>
            <FormLabel>Password</FormLabel>
            <Input color="black" placeholder="password" type="password" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            backgroundColor="newCustomGreen.600"
            color="white"
            mr={3}
            onClick={onClose}
          >
            Sign up
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SignupModal;
