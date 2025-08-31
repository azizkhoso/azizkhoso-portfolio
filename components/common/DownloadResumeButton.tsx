import { Box, ButtonProps } from "@chakra-ui/react";
import Button from "./Button";
import SvgShortArrow from "../Svg/SvgShortArrow";

export default function DownloadResumeButton(props: ButtonProps & { variant?: 'rounded' | 'simple' }) {
  return (
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
      // display={{ base: 'none', md: 'inline-flex' }}
      {...props}
    >
      Resume
    </Button>
  );
}
