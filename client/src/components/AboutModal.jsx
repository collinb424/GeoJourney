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
  useDisclosure,
  Text,
} from '@chakra-ui/react';

function AboutModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="newCustomGreen.600">
        <ModalHeader>About GeoJourney</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div
            style={{
              overflowY: 'auto',
              maxHeight: '400px',
            }}
          >
            <Text color="black">Welcome to GeoJourney! </Text>
            <br />
            <Text color="black">
              GeoJourney is an exciting virtual adventure where you'll be
              transported to random corners of the world via Google Street View.
              With each game, you'll be dropped somewhere unexpected—it could be
              the buzzing streets of Tokyo, the tranquil fjords of Norway, or a
              remote highway in the Australian Outback. Your mission? Guess
              where you are! Click on our interactive map to drop a pin at the
              location you think you've been placed.
            </Text>
            <br />
            <Text color="black">
              But that's not all! Be sure to check out our Arizona game mode,
              where you'll explore the diverse landscapes of the Grand Canyon
              state. And to see how your geo-guessing skills are progressing
              over time, GeoJourney will also keep track of your past scores for
              both the World and Arizona game mode.
            </Text>
            <br />
            <Text color="black">
              One quick note: due to the costs associated with using the Google
              Maps API, we do require users to sign up to play. Don't worry,
              though, signing up is entirely free, and once you do, you'll get
              unlimited access to GeoJourney. What's more, having an account
              allows you to keep track of your overall scores and see how you
              improve over time.
            </Text>
            <br />
            <Text color="black">
              The world is vast, and there's much to explore and learn—are you
              ready to embark on this adventure? Sign up today, and start your
              GeoJourney!
            </Text>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button
            backgroundColor="newCustomGreen.600"
            color="white"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AboutModal;
