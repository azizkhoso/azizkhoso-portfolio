import { Box, Container, Flex, Text, Image, Icon } from '@chakra-ui/react';
import SvgShortArrow from '../Svg/SvgShortArrow';

import halfProfile from '../../public/half-profile.png';
import reactIcon from '../../public/react-icon.svg';
import nodejsIcon from '../../public/nodejs-icon.svg';
import mongodbIcon from '../../public/mongodb-icon.svg';
import completeProject from '../../public/complete-project.svg';
import Button from '../common/Button';
import SvgBlurFilter from '../Svg/SvgBlurFilter';
import DownloadResumeButton from '../common/DownloadResumeButton';

export default function Hero() {
  return (
    <Box
      bgColor="blackAlpha.900"
      pos="relative"
      overflow="hidden"
      display="flex"
      h="auto"
    >
      <Icon as={SvgBlurFilter}
        fill="red.500"
        style={{ position: 'absolute', top: 10, left: 10 }}
        width={500}
        height={500}
      />
      <Icon as={SvgBlurFilter}
        fill="yellow"
        style={{ position: 'absolute', top: "10%", right: "5%" }}
        width={1000}
        height={1000}
      />
      <Icon as={SvgBlurFilter}
        fill="cyan"
        style={{ position: 'absolute', top: -100, right: -100 }}
        width={450}
        height={450}
      />
      <Box
        as={Container}
        maxW="container.2xl"
        pb="16"
        pt={{ base: '24', lg: '28' }}
        justifyContent="space-between"
        display="flex"
        flexFlow="row wrap"
        zIndex={1}
        gap={{ base: 8, lg: 2 }}
      >
        <Flex
          w={{ base: 'full', lg: '48%' }}
          flexDir="column"
          alignItems={{ base: 'center', lg: 'flex-start' }}
          textAlign={{ base: 'center', lg: 'left' }}
          my="auto"
          color="white"
        >
          <Text fontWeight="700" fontSize={{ base: '4xl', md: '4xl', lg: '6xl' }}>
            <Text as="span" fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }} color="yellow">
              Hello, I am
            </Text>
            <br />
            Abdul Aziz Khoso.
          </Text>
          <Text fontWeight={700} fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }} color="#59c378" mb={5}>
            Full Stack Developer
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} mb="30px">
            By writing efficient code with robust architecture, I develop masterpiece applications and maintain existing large scale projects.
          </Text>
          <Box
            as={Flex}
            flexDir="row"
            flexWrap="wrap"
            w="full"
            gap="2"
            alignItems="center"
            justifyContent={{ base: 'center', lg: 'flex-start' }}
          >
            <Button
              variant="rounded"
              rightIcon={
                <Box as={SvgShortArrow} fill="white" h="28px" transform="rotate(90deg)" w="18px" />
              }
            >
              Hire me
            </Button>
            <DownloadResumeButton display={{ base: 'inline-flex', md: 'none' }} />
          </Box>
        </Flex>
        <Flex
          w={{ base: 'full', lg: '48%' }}
          flexGrow={1}
          flexDir="column"
          alignItems={{ base: 'center', lg: 'flex-start' }}
          justifyContent="center"
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <Box
            width={{ base: '300px', md: '400px', lg: '450px', xl: '500px' }}
            height={{ base: '300px', md: '400px', lg: '450px', xl: '500px' }}
            pos="relative"
            my="auto"
            mx="auto"
          >
            {[
              { icon: reactIcon.src, top: '1%', left: '-5%' },
              { icon: nodejsIcon.src, top: '1%', right: '-5%' },
              { icon: mongodbIcon.src, bottom: '1%', right: '-5%' },
              { icon: completeProject.src, bottom: '1%', left: '-5%', isDifferent: true },
            ].map((item, index) => (
              <Box
                key={index}
                borderRadius="24px"
                width={item.isDifferent ? 'auto' : 'max(20%, 70px)'}
                height={item.isDifferent ? 'auto' : 'max(20%, 70px)'}
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
                    maxWidth: item.isDifferent ? '200px' : '80%',
                    backgroundColor: item.isDifferent ? 'white' : '#002742',
                    borderRadius: '18px',
                    padding: '2',
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
