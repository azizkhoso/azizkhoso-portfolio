import { Box, Container, Flex, Heading, Icon, Link, List, ListItem, Text } from "@chakra-ui/react";
import SvgBlurFilter from "./Svg/SvgBlurFilter";
import Image from "next/image";

import face from '../public/face.png';
import SvgLinkedIn from "./Svg/SvgLinkedIn";
import SvgGitHub from "./Svg/SvgGitHub";
import SvgEmail from "./Svg/SvgEmail";

const navLinks = [
  { title: 'About', link: '#about' },
  { title: 'Service', link: '#service' },
  { title: 'Portfolio', link: '#portfolio' },
  { title: 'Contact', link: '#contact' },
];

export default function Footer() {
  return (
    <Box id="footer" bgColor="blackAlpha.900" pos="relative" overflow="hidden">
      <SvgBlurFilter
        fill="lightgreen"
        style={{ position: 'absolute', top: "calc(50% - ((800 / 2) * 1px))", right: "calc(50% - ((800 / 2) * 1px))" }}
        width={800}
        height={800}
        opacity={0.6}
      />
      <Container
        maxWidth="container.2xl"
        justifyContent="space-between"
        display="flex"
        flexDir="column"
        alignItems="center"
        py="10"
        zIndex={1}
        pos="relative"
      >
        <Flex flexWrap="wrap" justifyContent="space-between" w="full">
          <Box display="flex" flexDir="column" w={{ base: '48%', md: '28%' }}>
            <Box as={Flex} alignItems="center" py="1" w="full">
              <Image
                alt="azizkhoso-face"
                src={face.src}
                width={64}
                height={64}
                style={{
                  backgroundColor: 'orangered',
                  borderRadius: '50%',
                  marginRight: '10px',
                }}
              />
              <Text fontSize={{ base: 'xl', lg: '2xl' }} fontWeight={700}>
                Abdul Aziz Khoso
              </Text>
            </Box>
            <Text my={8}>
              Building reliable apps, fixing tricky bugs, and deploying to the cloud — so you don’t have to worry about it.
            </Text>
            <Flex flexWrap="wrap" gap="4" id="social-contacts">
              {[
                { link: 'https://www.linkedin.com/in/aziz-khoso/', icon: SvgLinkedIn },
                { link: 'https://www.github.com/azizkhoso', icon: SvgGitHub },
                { link: 'mailto:azizkhoso586@gmail.com', icon: SvgEmail }
              ].map((contact) => (
                <Link href={contact.link} target="_blank" key={contact.link} width={6} height={6}>
                  <Icon as={contact.icon} fill="white" _hover={{ fill: 'yellow' }} />
                </Link>
              ))}
            </Flex>
          </Box>
          <Box display="flex" flexDir="column" w={{ base: 'full', md: '48%', lg: '28%' }}>
            <Heading as="h6" fontSize={{ base: 'lg', lg: '3xl' }} fontWeight={700}>Navigation</Heading>
            <Box
              alignItems="center"
              display="flex"
              flexGrow="1"
              pt="8"
            >
              <List display="flex" flexDir="column" alignItems="flex-start">
                {navLinks.map((lnk) => (
                  <ListItem
                    as={Link}
                    color="white"
                    fontWeight={500}
                    fontSize="xl"
                    href={lnk.link}
                    borderBottomWidth="4px"
                    borderColor="transparent"
                    _hover={{
                      color: 'green.500',
                      textDecor: 'none'
                    }}
                    key={lnk.title}
                    py={2}
                  >
                    -&nbsp;&nbsp;&nbsp;&nbsp;{lnk.title}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}