import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import SvgBlurFilter from "./Svg/SvgBlurFilter";

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
          <Box display="flex" flexDir="column" w={{ base: 'full', md: '48%', lg: '28%' }}>
            <Heading as="h1" fontSize={{ base: '2xl', lg: '5xl' }} fontWeight={700}>Abdul Aziz Khoso</Heading>
            <Text>
              Lorem ipsum30
            </Text>
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