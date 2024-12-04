import { Box, Container, Flex, Text, Image } from '@chakra-ui/react';
import SvgShortArrow from '../Svg/SvgShortArrow';

import halfProfile from '../../public/half-profile.png';
import reactIcon from '../../public/react-icon.svg';
import nodejsIcon from '../../public/nodejs-icon.svg';
import mongodbIcon from '../../public/mongodb-icon.svg';
import completeProject from '../../public/complete-project.svg';
import Button from '../common/Button';

export default function Hero() {
  return (
    <Box bgColor="black">
      <Box
        as={Container}
        maxW="container.2xl"
        pb="16"
        pt={{base: '8', lg: '36'}}
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
          <Text fontWeight="700" fontSize={{base: '3xl', md: '6xl', lg: '8xl' }}>
            <Text as="span" fontSize={{base: '2xl', md: '4xl', lg: '5xl'}} color="yellow">
              Hello, I am
            </Text>
            <br />
            Abdul Aziz Khoso.
          </Text>
          <Text fontWeight={700} fontSize={{base: 'lg', md: '2xl', lg: '3xl'}} color="#59c378" mb={5}>
            Full Stack Developer
          </Text>
          <Text fontSize={{base: 'md', md: 'lg'}} mb="30px">
            By writing efficient code with robust architecture, I develop masterpiece applications and maintain existing large scale projects.
          </Text>
          <Button
            variant="rounded"
            rightIcon={
              <Box as={SvgShortArrow} fill="white" h="28px" transform="rotate(90deg)" w="18px" />
            }
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
          <Box 
            width={{base: '300px', md: '400px', lg: '450px', xl: '500px'}}
            height={{base: '300px', md: '400px', lg: '450px', xl: '500px'}}
            pos="relative"
          >
            {[
              { icon: reactIcon.src, top: '1%', left: '-5%' },
              { icon: nodejsIcon.src, top: '1%', right: '-5%' },
              { icon: mongodbIcon.src, bottom: '1%', right: '-5%' },
              { icon: completeProject.src, bottom: '1%', left: '-5%', isDifferent: true },
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
              style={{ borderRadius: '50%', backgroundColor: '#4fc7ea', width: '100% !important' }}
              alt="half-profile"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
