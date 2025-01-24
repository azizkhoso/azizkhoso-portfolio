import { Box, Container, Flex, Heading, Img, Text } from '@chakra-ui/react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Button from '../common/Button';
import SvgShortArrow from '../Svg/SvgShortArrow';

const projects = [
  { name: 'Zoxxo', category: 'Web App', image: 'https://dummyimage.com/400x400/000/fff&text=Zoxxo' },
  { name: 'Jebreal', category: 'Web App', image: 'https://dummyimage.com/400x400/000/fff&text=Jebreal' },
  { name: 'Grade My Faculty', category: 'Web App', image: 'https://dummyimage.com/400x400/000/fff&text=Grade My Faculty' }
]

function SimpleSlider() {
  let sliderRef = React.useRef<Slider>();
  const next = () => sliderRef?.current?.slickNext();
  const prev = () => sliderRef?.current?.slickPrev();
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ],
  };
  return (
    <Box display="flex" flexDir="column">
      <Slider ref={(s) => {if (s) sliderRef.current = s;}} {...settings}>
        {projects.map((proj) => (
          <Flex flexDir="column" w="full" border="2px solid gray ">
            <Box boxSize="400px" overflow="hidden">
              <Img src={proj.image} _hover={{ transform: 'scale(1.2)' }} />
            </Box>
            <Heading as="h4" mt="7" fontSize="xl">{proj.name}</Heading>
            <Text mt="2" fontSize="sm">{proj.category}</Text>
          </Flex>
        ))}
      </Slider>
      <Flex w="full" alignItems="center" py="4" gap="8px" justifyContent="center">
        <Button variant="rounded" onClick={prev}>
          <Box as={SvgShortArrow} sx={{path: {fill: 'white'}, transform: 'rotate(-90deg)', aspectRatio: '1'}} padding={0} />
        </Button>
        <Button variant="rounded" onClick={next}>
          <Box as={SvgShortArrow} sx={{path: {fill: 'white'}, transform: 'rotate(90deg)', aspectRatio: '1'}} padding={0} />
        </Button>
      </Flex>
    </Box>
  );
}

export default function RecentWork() {
  return (
    <Box bgColor="blackAlpha.900">
      <Container
        maxWidth="container.2xl"
        justifyContent="space-between"
        display="flex"
        flexDir="column"
        alignItems="center"
        py="10"
      >
        <Flex flexDir={{base: 'column', md: 'row'}} alignItems="center" gap="28px">
          <Flex flexDir="column">
            <Heading as="h2" fontWeight={700} fontSize="5xl" my="5">Recent Work</Heading>
            <Text maxW={{ base: '100%', md: '60%', lg: '50%' }} color="#d8d8d8" lineHeight="7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae temporibus illum consequatur magnam sed. Dolor repudiandae quasi, cupiditate, libero ipsum debitis iure modi dolorum hic iste illo ea impedit aperiam.</Text>
          </Flex>
          <Box minH="100px" h="80%" sx={{aspectRatio: '1'}} backgroundColor="gray.100" borderRadius="50%" />
        </Flex>
        <Flex flexDir="column" gap="12px" w="full" mt="12">
          <SimpleSlider />
        </Flex>
      </Container>
    </Box>
  );
}
