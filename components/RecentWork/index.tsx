import { Box, Container, Flex, Heading, Img, Text } from '@chakra-ui/react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  { name: 'Zoxxo', category: 'Web App', image: 'https://dummyimage.com/400x400/000/fff&text=Zoxxo' },
  { name: 'Jebreal', category: 'Web App', image: 'https://dummyimage.com/400x400/000/fff&text=Jebreal' },
  { name: 'Grade My Faculty', category: 'Web App', image: 'https://dummyimage.com/400x400/000/fff&text=Grade My Faculty' }
]

function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {projects.map((proj) => (
        <Flex flexDir="column" w="full">
          <Box boxSize="400px" overflow="hidden">
            <Img src={proj.image} _hover={{ transform: 'scale(1.2)' }} />
          </Box>
          <Heading as="h4" mt="7" fontSize="xl">{proj.name}</Heading>
          <Text mt="2" fontSize="sm">{proj.category}</Text>
        </Flex>
      ))}
    </Slider>
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
        <Heading as="h2" fontWeight={700} textAlign="center" fontSize="5xl" my="5">Recent Work</Heading>
        <Text maxW={{ base: '100%', md: '60%', lg: '50%' }} color="#d8d8d8" lineHeight="7" textAlign="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae temporibus illum consequatur magnam sed. Dolor repudiandae quasi, cupiditate, libero ipsum debitis iure modi dolorum hic iste illo ea impedit aperiam.</Text>
        <Flex flexDir="column" gap="12px" w="full" mt="12">
          <SimpleSlider />
        </Flex>
      </Container>
    </Box>
  );
}
