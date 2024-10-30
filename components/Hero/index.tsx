import Image from 'next/image';
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import SvgShortArrow from '../Svg/SvgShortArrow';

import halfProfile from '../../public/half-profile.png';
import reactIcon from '../../public/react-icon.svg';
import nodejsIcon from '../../public/nodejs-icon.svg';
import mongodbIcon from '../../public/mongodb-icon.svg';
import completeProject from '../../public/complete-project.svg';

export default function Hero() {
  return (
    <Box bgColor="black">
      <Box
        as={Container}
        maxW="container.2xl"
        pb="16"
        pt="36"
        justifyContent="space-between"
        display="flex"
        flexFlow="row wrap"
      >
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
            By writing efficient code with robust architecture, I develop masterpiece applications and maintain existing large scale projects.
          </Text>
          <Button
            variant="solid"
            borderRadius={9999}
            colorScheme="green"
            rightIcon={
              <Box as={SvgShortArrow} fill="white" h="28px" transform="rotate(90deg)" w="18px" />
            }
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            justifyContent="space-between"
            gap="12px"
            height="54px"
            padding="15px 20px 15px 20px"
            fontSize="16px"
          >
            Hire me
          </Button>
        </Flex>
        <Flex
          w={{ base: 'full', lg: '48%' }}
          flexDir="column"
          alignItems={{ base: 'center', lg: 'flex-start' }}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <Box width="600px" height="600px" pos="relative">
            {[
              { icon: reactIcon, top: '10%', left: '0' },
              { icon: nodejsIcon, top: '10%', right: '0' },
              { icon: mongodbIcon, bottom: '10%', right: '0' },
              { icon: completeProject, bottom: '10%', left: '0', isDifferent: true },
            ].map((item, index) => (
              <Box
                key={index}
                borderRadius={24}
                width={item.isDifferent ? 'auto' : '100px'}
                height={item.isDifferent ? 'auto' : '100px'}
                bgColor="white"
                pos="absolute"
                top={item.top}
                left={item.left}
                right={item.right}
                bottom={item.bottom}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={item.icon}
                  alt="reactjs"
                  style={{
                    width: '100%',
                    maxWidth: item.isDifferent ? '200px' : '70px',
                    backgroundColor: item.isDifferent ? 'white' : '#002742',
                    borderRadius: '16px',
                    padding: '12px',
                  }}
                />
              </Box>
            ))}
            <Image
              src={halfProfile.src}
              width={600}
              height={600}
              style={{ borderRadius: '50%', backgroundColor: '#4fc7ea' }}
              alt="half-profile"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
