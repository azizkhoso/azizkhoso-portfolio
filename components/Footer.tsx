import { Box, Container, Flex, Heading, Link, Text } from "@chakra-ui/react";
import SvgBlurFilter from "./Svg/SvgBlurFilter";
import Image from "next/image";

import face from '../public/face.png';
import SvgLinkedIn from "./Svg/SvgLinkedIn";
import SvgGitHub from "./Svg/SvgGitHub";
import SvgEmail from "./Svg/SvgEmail";

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
            <Flex flexWrap="wrap" gap="4">
              <Link
                href="https://www.linkedin.com/in/aziz-khoso/"
                target="_blank"
                as={SvgLinkedIn}
                width={6}
                height={6}
                fill="white"
                _hover={{ fill: 'yellow' }}
              />
              <Link
                href="https://www.github.com/azizkhoso"
                target="_blank"
                as={SvgGitHub}
                width={6}
                height={6}
                fill="white"
                _hover={{ fill: 'yellow' }}
              />
              <Link
                href="mailto:azizkhoso586@gmail.com"
                target="_blank"
                as={SvgEmail}
                width={6}
                height={6}
                fill="white"
                _hover={{ fill: 'yellow' }}
              />
            </Flex>
          </Box>
          <Box display="flex" flexDir="column" w={{ base: 'full', md: '48%', lg: '28%' }}>
            <Heading as="h6" fontSize={{ base: 'lg', lg: '3xl' }} fontWeight={700}>Navigation</Heading>
            <Text>
              Lorem ipsum30
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}