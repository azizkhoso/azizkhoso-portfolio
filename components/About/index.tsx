import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

export default function About() {
  return (
    <Box bgColor="blackAlpha.900">
      <Container
        maxWidth="container.2xl"
        justifyContent="space-between"
        display="flex"
        flexFlow="row wrap"
        alignItems="center"
      >
        <Flex width={{ base: 'full', lg: '50%' }}>
          <Box as={Flex} flexDirection="column" width="full" pos="relative">
            <Flex
              textAlign="center"
              background="linear-gradient(180deg,#2e2c1f,#1b1b19)"
              borderRadius="10px"
              maxWidth="350px"
              width="full"
              py="50px"
              pb="180px"
              px="50px"
              mr="auto"
              mt="50px"
              display="flex"
              flexDir="column"
            >
              <Heading as="h2" color="#ffe600" fontSize="140px">
                02
              </Heading>
              <Text>Years of Experience</Text>
            </Flex>
            <Flex
              w="full"
              maxW="300px"
              borderRadius="12px"
              p="20px"
              bg="transparent"
              pos="absolute"
              bottom="40px"
              right="0"
              display="flex"
              gap="10px"
              alignItems="center"
              _before={{
                position: 'absolute',
                left: '2px',
                top: '2px',
                width: '98%',
                height: '96%',
                opacity: 0.85,
                background: '#2d2b1f',
                zIndex: -2,
                borderRadius: '12px',
                content: '""',
              }}
              _after={{
                position: 'absolute',
                left: 0,
                right: 0,
                w: '100%',
                height: '100%',
                content: '""',
                bg: 'linear-gradient(90deg,#939393,rgba(28,26,26,.3))',
                // bg: 'white',
                opacity: 1,
                zIndex: -1,
                borderRadius: '12px',
              }}
            >
              <Heading flexBasis="50%" as="h3" color="primary" fontSize="44px">
                100%
              </Heading>
              <Text flexBasis="50%">
                Clients
                <br />
                Satisfactions
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Heading>My Advantage</Heading>
      </Container>
    </Box>
  );
}
