import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Icon,
  Link,
} from '@chakra-ui/react';
import SvgShortArrow from '../Svg/SvgShortArrow';
import Button from '../common/Button';
import SvgMenuBars from '../Svg/SvgMenuBars';
import SvgEmail from '../Svg/SvgEmail';
import SvgLinkedIn from '../Svg/SvgLinkedIn';
import SvgGitHub from '../Svg/SvgGitHub';
import SvgBlurFilter from '../Svg/SvgBlurFilter';

export default function Contact() {
  return (
    <Box bgColor="gray.900" pos="relative">
      <SvgBlurFilter fill="red" style={{ position: 'absolute', top: '0', left: '0', zIndex: 0 }} />
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
        <Heading as="h2" fontWeight={700} textAlign="center" fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }} my="5">Let&apos;s Talk</Heading>
        <Text maxW={{ base: '100%', md: '60%', lg: '50%' }} color="#d8d8d8" lineHeight="7" textAlign="center" fontSize={{ base: 'sm', lg: 'md' }}>
          Need your project fixed or built? I am just a click away. Reach out to me via email or LinkedIn and let&apos;s discuss how I can help you achieve your goals.
        </Text>
        <Flex
          flexDir="row"
          flexWrap="wrap"
          rowGap={8}
          columnGap={8}
          mt="12"
          w={{ base: '100%', lg: '80%' }}
          justifyContent="space-between"
        >
          <Stack spacing={4} w={{ base: '100%', lg: '58%' }} alignItems="center" p="8" bgColor="gray.900" borderWidth={1} borderColor="gray.400" borderRadius={8}>
            <Heading as="h4">Get In Touch</Heading>
            <Flex as="form" flexDir="column" gap="4" w="full">
              <FormControl>
                <FormLabel htmlFor="fullName">Full Name</FormLabel>
                <Input variant="flushed" type="text" placeholder="Your Name" id="fullName" name="fullName" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input variant="flushed" type="email" placeholder="Your Email" id="email" name="email" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <Input variant="flushed" type="text" placeholder="Subject" id="subject" name="subject" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea variant="flushed" rows={4} placeholder="Your Message" id="message" name="message" />
              </FormControl>
            </Flex>
            <Button type='submit' variant="rounded">Submit</Button>
          </Stack>
          <Flex flexDir="column" w={{ base: '100%', lg: '38%' }} rowGap="8">
            {[
              { title: 'Email', icon: SvgEmail, text: 'azizkhoso586@gmail.com', link: 'mailto:azizkhoso586@gmail.com' },
              { title: 'Github', icon: SvgGitHub, text: 'azizkhoso', link: 'https://www.github.com/azizkhoso' },
              { title: 'LinkedIn', icon: SvgLinkedIn, text: 'aziz-khoso', link: 'https://www.linkedin.com/in/aziz-khoso/' },
            ].map((item) => (
              <Stack key={item.title} bgColor="gray.900" p="8" borderWidth={1} borderColor="gray.400" borderRadius={8} spacing={2}>
                <Heading as="h6" fontSize="2xl">{item.title}</Heading>
                <Box display="flex" alignItems="center" gap="4">
                  <Box display="flex" alignItems="center" justifyContent="center" rounded="full" bgColor="gray.700" p="4">
                    <Icon as={item.icon} boxSize="8" sx={{ '& path': { fill: 'yellow' } }} />
                  </Box>
                  <Link href={item.link} target="_blank" fontSize="md">{item.text}</Link>
                </Box>
              </Stack>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
