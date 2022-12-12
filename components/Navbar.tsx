import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import face from '../public/face.png';

export default function Navbar() {
  return (
    <Box
      as="header"
      bgColor="black"
      color="white"
      display="flex"
      left={0}
      pos="absolute"
      right={0}
      top={0}
      w="full"
    >
      <Container as="nav" display="flex" maxW="container.2xl" mx="auto">
        <Box as={Flex} alignItems="center">
          <Image
            alt="azizkhoso-face"
            src={face.src}
            width={64}
            height={64}
            style={{ backgroundColor: 'orangered', borderRadius: '50%' }}
          />
          <Text fontSize="5xl" fontWeight={700}>
            Aziz Khoso
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
