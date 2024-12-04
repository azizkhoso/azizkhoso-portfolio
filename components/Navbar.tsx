import React from 'react';
import {
  Box,
  // Button,
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
import Button from './common/Button';

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
      bgColor="transparent"
      color="white"
      display="flex"
      left={0}
      pos="absolute"
      py="5px"
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
          h="36px"
          icon={<Box as={SvgMenuBars} fill="white" w="21px" h="20px" />}
          onClick={() => setOpen(true)}
        />
        <Drawer
          isOpen={isOpen && Boolean(isMobileScreen)}
          onClose={() => setOpen(false)}
          placement="left"
        >
          <DrawerContent bgColor="#1e1e1e">
            <DrawerCloseButton color="white" mt="4" boxSize="38px" fontSize="22px" right="8" />
            <DrawerBody mt="24" px={0}>
              <List as={Stack}>
                {navLinks.map((lnk) => (
                  <ListItem
                    as={Link}
                    color="white"
                    fontWeight={500}
                    fontFamily="Roboto"
                    fontSize="md"
                    href={lnk.link}
                    key={lnk.title}
                    px="35px"
                    pt="13px"
                    pb="10px"
                  >
                    {lnk.title}
                  </ListItem>
                ))}
              </List>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Box as={Flex} alignItems="center" py="1" w="2-12">
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
          <Text fontSize={{base: '2xl', lg: '5xl'}} fontWeight={700}>
            Aziz
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
            variant="rounded"
            rightIcon={
              <Box
                as={SvgShortArrow}
                fill="white"
                h="28px"
                mt="1"
                ml={-1}
                transform="rotate(180deg)"
                w="18px"
              />
            }
          >
            Resume
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
