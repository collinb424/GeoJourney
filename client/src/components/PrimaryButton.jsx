import React from 'react';
import { Button } from '@chakra-ui/react';

function PrimaryButton({ text, handleClick, bg }) {
  return (
    <Button
      bg={bg ? bg : '#0E3239'}
      color="white"
      borderRadius="50px"
      fontWeight="bold"
      fontFamily="'Inter', sans-serif"
      fontSize="calc(7px + 1.15vw)"
      width="calc(35px + 8.25vw)"
      height="calc(10px + 2.75vw)"
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}

export default PrimaryButton;
