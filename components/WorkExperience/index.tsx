import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

export default function WorkExperience() {
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
        <Heading as="h2" fontWeight={700} textAlign="center" fontSize="5xl" my="5">My Work Experience</Heading>
        <Text maxW={{ base: '100%', md: '60%', lg: '50%' }} color="#d8d8d8" lineHeight="7" textAlign="center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae temporibus illum consequatur magnam sed. Dolor repudiandae quasi, cupiditate, libero ipsum debitis iure modi dolorum hic iste illo ea impedit aperiam.</Text>
        <Flex flexDir="column" gap="12px" w="full" mt="12">
          {
            [
              { startDate: 'Feb, 2024', endDate: 'Feb, 2025', position: 'Full Stack Developer', company: 'FW, Pakistan' },
              { startDate: 'Feb, 2024', endDate: 'Feb, 2025', position: 'Full Stack Developer', company: 'FW, Pakistan' },
              { startDate: 'Feb, 2024', endDate: 'Feb, 2025', position: 'Full Stack Developer', company: 'FW, Pakistan' }
            ]
              .map((wk) => (
                <Box
                  key={wk.startDate}
                  padding="20px 70px"
                  background="#282828"
                  borderRadius="8px"
                  marginBottom="30px"
                  position="relative"
                  border="1px solid transparent"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="xl" fontWeight={700}>{wk.startDate} - {wk.endDate}</Text>
                  <Box boxSize="80px" borderRadius="full" bgColor="#d8d8d8" />
                  <Flex flexDirection="column">
                    <Text fontSize="3xl" fontWeight={700}>{wk.position}</Text>
                    <Text color="tomato">{wk.company}</Text>
                  </Flex>
                  <Text>Go to Website</Text>
                </Box>
              ))
          }
        </Flex>
      </Container>
    </Box>
  );
}
