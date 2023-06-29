import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';

function ScoresModal({ scores, ...props }) {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>My Scores</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div
            style={{
              overflowY: 'auto',
              maxHeight: '400px',
            }}
          >
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Game Mode</th>
                  <th>Total Score</th>
                </tr>
              </thead>
              <tbody>
                {console.log(scores)}
                {scores.map((score, index) => (
                  <tr key={index}>
                    <td>{new Date(score.date).toLocaleDateString()}</td>
                    <td>{score.gameMode}</td>
                    <td>{score.totalScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ScoresModal;
