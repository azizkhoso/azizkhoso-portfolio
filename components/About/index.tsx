import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import {theme} from '../../pages/_app';

export default function About() {
  return (
    <Box bgColor="blackAlpha.900">
      <Container
        maxWidth="container.2xl"
        justifyContent="space-between"
        display="flex"
        flexFlow="row wrap"
        alignItems="center"
        py="20"
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
              my="25px"
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
              left="25%"
              display="flex"
              gap="10px"
              zIndex={1}
              alignItems="center"
              _before={{
                position: 'absolute',
                left: '2px',
                top: '2px',
                width: '98%',
                height: '96%',
                opacity: 0.85,
                background: '#2d2b1f',
                zIndex: -1,
                borderRadius: '12px',
                content: '""',
              }}
              _after={{
                position: 'absolute',
                top: 0,
                right: 0,
                w: '100%',
                height: '100%',
                content: '""',
                bg: 'linear-gradient(90deg,#939393,rgba(28,26,26,.3))',
                opacity: 1,
                zIndex: -2,
                borderRadius: '12px',
              }}
            >
              <Heading flexBasis="50%" as="h3" color="green.500" fontSize="44px">
                100%
              </Heading>
              <Text flexBasis="50%">
                Projects
                <br />
                Completions
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Flex width={{ base: 'full', lg: '50%' }}>
          <Box as={Flex} flexDirection="column" width="full" pos="relative" m="auto">
              <Heading fontSize="5xl" mb="5">My Advantages</Heading>
              <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet facilis velit voluptatem adipisci quasi minima deleniti consequuntur beatae ea fuga!</Text>
              <Flex flexWrap="wrap" justify="space-between" align="center" mt="40px" gap="20px">
                {
                  [
                    {label: 'ReactJS', color: theme.colors.green[500], logo: '50%'},
                    {label: 'ExpressJS', color: theme.colors.yellow[500], logo: '50%'},
                    {label: 'MongoDB', color: theme.colors.orange[500], logo: '50%'},
                    {label: 'Google Cloud', color: theme.colors.red[500], logo: '50%'},
                    {label: 'ExpressJS', color: theme.colors.purple[500], logo: '50%'},
                    {label: 'ExpressJS', color: theme.colors.blue[500], logo: '50%'},
                  ].map((adv) => (
                    <Flex
                      key={adv.label}
                      w="full"
                      maxW="30%"
                      borderRadius="12px"
                      p="30px 12px"
                      bg="transparent"
                      pos="relative"
                      display="flex"
                      flexDir="column"
                      gap="16px"
                      zIndex={1}
                      alignItems="center"
                      _before={{
                        position: 'absolute',
                        left: '1%',
                        top: '2px',
                        width: '98%',
                        height: '96%',
                        opacity: 0.85,
                        background: '#2d2b1f',
                        zIndex: -1,
                        borderRadius: '12px',
                        content: '""',
                      }}
                      _after={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        w: '100%',
                        height: '100%',
                        content: '""',
                        bg: `linear-gradient(180deg,${adv.color},rgba(28,26,26,.3))`,
                        opacity: 1,
                        zIndex: -2,
                        borderRadius: '12px',
                      }}
                    >
                      <Heading flexBasis="50%" as="h3" color="white" fontSize="44px">
                        {adv.logo}
                      </Heading>
                      <Text color={adv.color}>
                        {adv.label}
                      </Text>
                    </Flex>
                  ))
                }
              </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
