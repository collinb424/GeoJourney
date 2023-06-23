import * as React from 'react';
import { Button } from '@chakra-ui/react';

function PrimaryButton({ text }) {
  return (
    <Button
      bg="#0E3239"
      color="white"
      borderRadius="50px"
      fontWeight="bold"
      fontFamily="'Inter', sans-serif"
      fontSize="calc(7px + 1.15vw)" // adjust as needed
      width="calc(35px + 8.25vw)" // adjust as needed
      height="calc(10px + 2.5vw)"
    >
      {text}
    </Button>
  );
}

export default PrimaryButton;
