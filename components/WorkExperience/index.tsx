import { Box, Container, Flex, Heading, Text, Image } from '@chakra-ui/react';
import SvgShortArrow from '../Svg/SvgShortArrow';

export default function WorkExperience() {
  return (
    <Box bgColor="black">
      <Container
        maxWidth="container.2xl"
        justifyContent="space-between"
        display="flex"
        flexDir="column"
        alignItems="center"
        py="10"
      >
        <Heading as="h2" fontWeight={700} textAlign="center" fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }} my="5">My Work Experience</Heading>
        <Text maxW={{ base: '100%', md: '60%', lg: '50%' }} color="#d8d8d8" lineHeight="7" textAlign="center" fontSize={{ base: 'sm', lg: 'md' }}>
          Having hands-on experience with all 3 layers of a web app, i.e. frontend, backend, and deployment, I stand out in top 5% developers. My work experience 
          has equipped me with essential expertise that highlights me in the world full of developers.
        </Text>
        <Flex flexDir="column" gap="12px" w="full" mt="12">
          {
            [
              {
                startDate: 'Oct, 2024',
                endDate: 'Present',
                position: 'Analyst Programmer',
                logo: {
                  src: 'centegy-technologies.svg',
                  size: '80%',
                },
                company: 'Centegy Technologies, Pakistan',
                link: 'https://www.linkedin.com/company/centegy-technologies-fz-llc-dubai/' 
              },
              {
                startDate: 'Feb, 2024',
                endDate: 'Aug, 2024',
                position: 'Analyst Programmer',
                logo: {
                  src: 'fwu.svg',
                  size: '80%',
                },
                company: 'ForwardYou AG, Pakistan',
                link: 'https://www.linkedin.com/company/fwu-ag/' 
              },
              {
                startDate: 'Seb, 2023',
                endDate: 'Feb, 2024',
                position: 'Full Stack Developer',
                logo: {
                  src: 'fluidwork.jpg',
                  size: '100%',
                },
                company: 'Fluid Work, Germany',
                link: 'https://www.linkedin.com/company/fluidwork-io/' 
              },
              {
                startDate: 'Dec, 2021',
                endDate: 'Mar, 2022',
                position: 'Full Stack Developer Internee',
                logo: {
                  src: 'forward-solutions.jpg',
                  size: '70%',
                },
                company: 'Forward Solutions, Pakistan',
                link: 'https://www.linkedin.com/company/forward-solutions/'
               }
            ]
              .map((wk) => (
                <Box
                  key={wk.startDate}
                  py="5"
                  px={{ base: '3', md: '8', lg: '16' }}
                  background="gray.900"
                  borderRadius="8px"
                  marginBottom="30px"
                  position="relative"
                  border="1px solid transparent"
                  display="flex"
                  alignItems="center"
                  justifyContent={{ base: "center", md: "space-between" }}
                  flexWrap="wrap"
                  color="white"
                  gap={{ base: '16px', md: 'none' }}
                  _hover={{border: '1px solid gray', transform: 'scale(1.015)', transition: 'all 0.2s ease-in-out'}}
                >
                  <Text
                    fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                    fontWeight={700}
                    w={{ base: 'full', sm: '60%', lg: '20%' }}
                    textAlign={{ base: 'center', sm: 'left', md: 'left' }}
                  >
                    {wk.startDate} - {wk.endDate}
                  </Text>
                  <Flex justifyContent="center" alignItems="center" h="full" width={{ base: '30%', lg: '10%' }}>
                    <Box
                      boxSize="80px"
                      rounded="full"
                      backgroundColor="gray.50"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      overflow="hidden"
                    >
                      <Image src={wk.logo.src} alt={wk.company} width={wk.logo.size} />
                    </Box>
                  </Flex>
                  <Flex
                    flexDirection="column"
                    w={{ base: 'full', sm: '60%', lg: '50%' }}
                    textAlign={{ base: 'center', sm: 'left', md: 'left' }}
                  >
                    <Text fontSize={{ base: 'lg', md: 'xl', lg: '3xl' }} fontWeight={700}>{wk.position}</Text>
                    <Text color="tomato">{wk.company}</Text>
                  </Flex>
                  <Text
                    as="a"
                    href={wk.link}
                    target='_blank'
                    fontSize={{base: 'smaller', md: 'sm', lg: 'md'}}
                    w={{ base: 'full', sm: '30%', lg: 'fit-content' }}
                    display="flex"
                    justifyContent={{ base: 'center', lg: 'flex-end' }}
                    alignItems="center"
                    gap="4px"
                    fontWeight="bold"
                    role="group"
                  >
                    <SvgShortArrow fill='white' style={{ transform: 'rotate(90deg)' }} />
                    Go to Website
                  </Text>
                </Box>
              ))
          }
        </Flex>
      </Container>
    </Box>
  );
}
