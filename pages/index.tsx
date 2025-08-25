import { Box } from '@chakra-ui/react';

import About from '../components/About';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import WorkExperience from '../components/WorkExperience';
import RecentWork from '../components/RecentWork';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <Box color="white">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <RecentWork />
      <Contact />
    </Box>
  );
}
