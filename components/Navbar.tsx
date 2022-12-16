import React from 'react';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  Flex,
  IconButton,
  List,
  ListItem,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import face from '../public/face.png';
import SvgShortArrow from './Svg/SvgShortArrow';
import SvgMenuBars from './Svg/SvgMenuBars';

const navLinks = [
  { title: 'Home', link: '#name' },
  { title: 'About', link: '#about' },
  { title: 'Service', link: '#service' },
  { title: 'Portfolio', link: '#portfolio' },
  { title: 'Contact', link: '#contact' },
  { title: 'Blog', link: '#blog' },
];

export default function Navbar() {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const isMobileScreen = useBreakpointValue<boolean>({ base: true, lg: false });
  return (
    <Box
      as="header"
      bgColor="black"
      color="white"
      display="flex"
      left={0}
      pos="absolute"
      right={0}
      top={0}
      w="full"
    >
      <Container
        as="nav"
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        maxW="container.2xl"
        mx="auto"
      >
        <IconButton
          aria-label="menu"
          colorScheme="green"
          display={{ base: 'flex', lg: 'none' }}
          icon={<Box as={SvgMenuBars} fill="white" boxSize="21px" />}
          onClick={() => setOpen(true)}
        />
        <Drawer
          isOpen={isOpen && Boolean(isMobileScreen)}
          onClose={() => setOpen(false)}
          placement="left"
        >
          <DrawerContent bgColor="black">
            <DrawerCloseButton color="white" />
            <DrawerBody>
              <List as={Stack}>
                {navLinks.map((lnk) => (
                  <ListItem
                    as={Link}
                    color="white"
                    fontWeight={500}
                    href={lnk.link}
                    key={lnk.title}
                    px="15px"
                  >
                    {lnk.title}
                  </ListItem>
                ))}
              </List>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Box as={Flex} alignItems="center" py="1" w="2-12" whiteSpace="nowrap">
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
          <Text fontSize="40px" fontWeight={700}>
            Aziz K.
          </Text>
        </Box>
        <Box
          alignItems="center"
          display={{ base: 'none', lg: 'flex' }}
          flexGrow="1"
          justifyContent="center"
        >
          <List as={Flex}>
            {navLinks.map((lnk) => (
              <ListItem
                as={Link}
                color="white"
                fontWeight={500}
                href={lnk.link}
                borderBottomWidth="4px"
                borderColor="transparent"
                _hover={{
                  borderColor: 'green.500',
                }}
                key={lnk.title}
                py="30px"
                px="15px"
              >
                {lnk.title}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="flex-end" w="2-12">
          <Button
            variant="solid"
            borderRadius={9999}
            colorScheme="green"
            rightIcon={
              <Box
                as={SvgShortArrow}
                fill="white"
                h="28px"
                mt="2"
                transform="rotate(180deg)"
                w="18px"
              />
            }
            h="44px"
            padding="10px 20px 10px 20px"
          >
            Resume
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
