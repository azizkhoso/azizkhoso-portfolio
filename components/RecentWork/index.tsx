import { Box, Container, Flex, Heading, Img, Text } from '@chakra-ui/react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Button from '../common/Button';
import SvgShortArrow from '../Svg/SvgShortArrow';
import SvgWinner from '../Svg/SvgWinner';

const projects = [
  { name: 'Zoxxo', category: 'Web App', image: '/assets/zoxxo-cover.png' },
  { name: 'Jebreal', category: 'Web App', image: '/assets/jebreal-cover.png' },
  { name: 'Grade My Faculty', category: 'Web App', image: '/assets/gmf-cover.png' }
]

function SimpleSlider() {
  let sliderRef = React.useRef<Slider>();
  const next = () => sliderRef?.current?.slickNext();
  const prev = () => sliderRef?.current?.slickPrev();
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000, // interval after which slide is changed
    cssEase: 'ease-in',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ],
  };
  return (
    <Box display="flex" flexDir="column">
      <Slider ref={(s) => { if (s) sliderRef.current = s; }} {...settings}>
        {projects.map((proj) => (
          <Flex key={proj.name} flexDir="column" w="full" px="2">
            <Flex flexDir="column" w="full" backgroundColor="rgba(255, 255, 255, 0.2)" borderRadius="9px">
              <Box w="full" minH="400px" overflow="hidden">
                <Img src={proj.image} _hover={{ transform: 'scale(1.2)' }} />
              </Box>
              <Heading as="h4" mt="7" fontSize="xl" px="4">{proj.name}</Heading>
              <Text my="2" fontSize="sm" px="4">{proj.category}</Text>
            </Flex>
          </Flex>
        ))}
      </Slider>
      <Flex w="full" alignItems="center" py="4" gap="8px" justifyContent="center">
        <Button variant="simple" rounded="full" sx={{ padding: 0, justifyContent: 'center' }} onClick={prev}>
          <Box as={SvgShortArrow} sx={{ path: { fill: 'white' }, transform: 'rotate(-90deg)', aspectRatio: '1' }} padding={0} />
        </Button>
        <Button variant="simple" rounded="full" sx={{ padding: 0, justifyContent: 'center' }} onClick={next}>
          <Box as={SvgShortArrow} sx={{ path: { fill: 'white' }, transform: 'rotate(90deg)', aspectRatio: '1' }} padding={0} />
        </Button>
      </Flex>
    </Box>
  );
}

export default function RecentWork() {
  return (
    <Box bgColor="darkGray.900">
      <Container
        maxWidth="container.2xl"
        justifyContent="space-between"
        display="flex"
        flexDir="column"
        alignItems="center"
        py="10"
      >
        <Flex flexDir={{ base: 'column', md: 'row' }} alignItems="center" gap="28px">
          <Flex flexDir="column">
            <Heading as="h2" fontWeight={700} fontSize="5xl" my="5">Recent Work</Heading>
            <Text maxW={{ base: '100%', md: '60%', lg: '50%' }} color="#d8d8d8" lineHeight="7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae temporibus illum consequatur magnam sed. Dolor repudiandae quasi, cupiditate, libero ipsum debitis iure modi dolorum hic iste illo ea impedit aperiam.
            </Text>
          </Flex>
          <Box minH="100px" h="80%" sx={{ aspectRatio: '1' }} backgroundColor="#282828" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
            <SvgWinner width="60px" height="60px" />
          </Box>
        </Flex>
        <Flex flexDir="column" gap="12px" w="full" mt="12">
          <SimpleSlider />
        </Flex>
      </Container>
    </Box>
  );
}
