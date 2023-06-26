import * as React from 'react';
import { Button } from '@chakra-ui/react';

function LargerButton({ text, className, bg, handleClick }) {
  return (
    <Button
      className="play"
      bg={bg ? bg : '#3A8952'}
      color="white"
      borderRadius="50px"
      fontWeight="bold"
      fontFamily="'Inter', sans-serif"
      fontSize="calc(10px + 1.75vw)" // adjust as needed
      width="calc(50px + 10vw)" // adjust as needed
      height="calc(20px + 3vw)"
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}

export default LargerButton;
