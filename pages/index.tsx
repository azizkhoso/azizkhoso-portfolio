import { Box } from '@chakra-ui/react';

import About from '../components/About';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import WorkExperience from '../components/WorkExperience';

export default function Home() {
  return (
    <Box color="white">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
    </Box>
  );
}
