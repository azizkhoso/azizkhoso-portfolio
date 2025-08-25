import { Box, Container, Flex, Heading, Text, Image, VStack, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import SvgShortArrow from '../Svg/SvgShortArrow';
import Button from '../common/Button';

export default function Contact() {
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
        <Heading as="h2" fontWeight={700} textAlign="center" fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }} my="5">Let's Talk</Heading>
        <Text maxW={{ base: '100%', md: '60%', lg: '50%' }} color="#d8d8d8" lineHeight="7" textAlign="center" fontSize={{ base: 'sm', lg: 'md' }}>
          Need your project fixed or built? I am just a click away. Reach out to me via email or LinkedIn and let's discuss how I can help you achieve your goals.
        </Text>
        <Flex
          flexDir="row"
          flexWrap="wrap"
          gap="12px"
          mt="12"
          w={{ base: '100%', md: '80%', lg: '60%' }}
          bgColor="blackAlpha.800"
          border="1px solid rgba(255, 255, 255, 0.3)"
          borderRadius={8}
          p="8"
        >
          <VStack spacing={4} w="full">
            <Heading as="h4">Get In Touch</Heading>
            <Flex as="form" flexDir="column" gap="4">
              <FormControl>
                <FormLabel htmlFor="fullName">Full Name</FormLabel>
                <Input type="text" placeholder="Your Name" id="fullName" name="fullName" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input type="email" placeholder="Your Email" id="email" name="email" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <Input type="text" placeholder="Subject" id="subject" name="subject" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea rows={4} placeholder="Your Message" id="message" name="message" />
              </FormControl>
            </Flex>
            <Button type='submit' variant="rounded">Submit</Button>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}
