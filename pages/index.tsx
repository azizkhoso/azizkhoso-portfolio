import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import SvgShortArrow from '../components/Svg/SvgShortArrow';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box bgColor="black">
        <Box as={Container} maxW="container.xl" display="flex" flexFlow="row wrap" px={0}>
          <Flex
            w={{ base: 'full', lg: '48%' }}
            flexDir="column"
            alignItems={{ base: 'center', lg: 'flex-start' }}
            textAlign={{ base: 'center', lg: 'left' }}
            pt="90px"
            pb="85px"
            color="white"
          >
            <Text fontWeight="700" fontSize="60px">
              <Text as="span" fontSize="45px" color="yellow">
                Hello, I am
              </Text>
              <br />
              Abdul Aziz Khoso.
            </Text>
            <Text fontWeight={700} fontSize="28px" color="#59c378" mb={5}>
              Full Stack Developer
            </Text>
            <Text fontSize="19px" mb="30px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas harum, illum
              ipsa sequi ea ipsum nobis ullam, cum eligendi non corrupti! Recusandae, minus
              doloribus.
            </Text>
            <Button
              variant="solid"
              borderRadius={9999}
              colorScheme="green"
              rightIcon={
                <Box as={SvgShortArrow} fill="white" h="28px" transform="rotate(90deg)" w="18px" />
              }
              padding="10px 20px 10px 20px"
              size="lg"
              alignSelf={{ base: 'center', lg: 'flex-start' }}
            >
              Hire me
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
