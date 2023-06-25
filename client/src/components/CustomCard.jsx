import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import PrimaryButton from './PrimaryButton';
import { useNavigate } from 'react-router-dom';

function CustomCard({ image, altText, title }) {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate(`/game/${title}`);
  };

  return (
    <Box
      borderRadius="lg"
      backgroundColor="customGreen.500"
      padding="4"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        src={image}
        alt={altText}
        borderRadius="full"
        boxSize="110px"
        objectFit="cover"
        marginBottom="3"
      />
      <Text
        marginBottom="4"
        fontWeight="800"
        fontFamily="'Inter', sans-serif"
        fontSize="calc(14px + 1.3vw)"
      >
        {title}
      </Text>
      <PrimaryButton text="Play" handleClick={routeChange} />
    </Box>
  );
}

export default CustomCard;
