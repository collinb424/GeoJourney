import React, { useState, useContext } from 'react';
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
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

function SignupModal({ isOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:4000/user/signup', {
        username,
        password,
      });
      localStorage.setItem('jwt-token', response.data.token);
      authContext.setIsAuthenticated(true);
      navigate('/user');
    } catch (err) {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="newCustomGreen.600">
        <ModalHeader>Sign up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text color="black" mb="1rem">
            To prevent spam, GeoJourney requires users to sign up. However, it
            is completely free to play after sign up!
          </Text>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              color="black"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl mt={5}>
            <FormLabel>Password</FormLabel>
            <Input
              color="black"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </ModalBody>

        <ModalFooter>
          <Button
            backgroundColor="newCustomGreen.600"
            color="white"
            mr={3}
            onClick={handleSignup}
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
