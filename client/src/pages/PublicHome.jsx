import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import background from '../assets/images/PublicHomeBackground.png';
import logo from '../assets/images/Logo.png';
import './PublicHome.css';
import { Box, Button, Flex, Image } from '@chakra-ui/react';

function PublicHome() {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="Logo" />
      <div className="buttons">
        <PrimaryButton text="About" />
        <PrimaryButton text="Log in" />
        <PrimaryButton text="Sign up" />
      </div>
      <h1 className="title">GeoJourney</h1>
      <Button
        bg="#3A8952"
        color="white"
        borderRadius="50px"
        fontWeight="bold"
        fontFamily="'Inter', sans-serif"
        fontSize="25px"
        width="150px"
        height="59px"
        className="play"
      >
        Play
      </Button>
      <div className="header"></div>
      <div className="imgbox">
        <img
          src={background}
          alt="Background of road next to lake and mountains"
          className="center-fit"
        ></img>
      </div>
    </div>
  );
}

// return (
//     <>
//       <Flex
//         as="header"
//         justify="space-between"
//         align="center"
//         backgroundColor="#30E3D3"
//         height="50px"
//         width="100%"
//         padding="5"
//       >
//         <Image src={logo} alt="Logo" boxSize="169px" />
//         <Flex
//           direction={['column', 'row']}
//           justify="space-between"
//           width="100%"
//           maxW="56rem"
//           mx="auto"
//         >
//           <Button
//             width="12.5rem"
//             height="4.5625rem"
//             mb={['1rem', '0']}
//             mr={['0', '1rem']}
//           >
//             Button 1
//           </Button>
//           <Button
//             width="12.5rem"
//             height="4.5625rem"
//             mb={['1rem', '0']}
//             mr={['0', '1rem']}
//           >
//             Button 2
//           </Button>
//           <Button width="12.5rem" height="4.5625rem">
//             Button 3
//           </Button>
//         </Flex>
//       </Flex>
//       <Box
//         as="main"
//         backgroundImage={background}
//         backgroundSize="cover"
//         backgroundPosition="center"
//         paddingTop="56.25%"
//         position="relative"
//         width="100%"
//       >
//         {/* Your background content here */}
//       </Box>
//     </>
//   );

//   {
//     /* <div class="container">
//       <img
//         src={background}
//         alt="Background of road next to lake and mountains"
//         class="background-image"
//       />

//       <Button
//         bg="#0E3239"
//         color="white"
//         borderRadius="50px"
//         fontWeight="bold"
//         fontFamily="'Inter', sans-serif"
//       >
//         About
//       </Button>
//     </div> */
//   }
//   //   );
// }

export default PublicHome;
