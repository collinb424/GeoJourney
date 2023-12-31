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
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const JWT_TOKEN = 'jwt-token';
const API_URL = `${process.env.REACT_APP_API_BASE_URL}/user/login`;

function LoginModal({ isOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await axios.post(API_URL, {
        username,
        password,
      });
      localStorage.setItem(JWT_TOKEN, response.data.token);
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
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
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
            onClick={handleLogin}
          >
            Log in
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;
