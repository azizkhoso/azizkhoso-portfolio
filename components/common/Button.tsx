import { ButtonProps, Button as CButton } from "@chakra-ui/react";

export default function Button(props: ButtonProps & { variant: 'rounded' | 'simple' }) {
  const { variant } = props;

  let defaultProps = {
    fontSize: { base: 'sm', md: 'md' },
    padding: { base: '4', md: '6' },
    justifyContent: 'space-between',
    gap: '12px',
    variant: 'outline',
    colorScheme: 'green',
    borderRadius: 0,
    textColor: 'white',
  }

  if (variant === 'rounded') {
    defaultProps.variant = 'solid';
    defaultProps.borderRadius = 99999;
    return <CButton {...props} {...defaultProps} as="button" />
  } else if (variant === 'simple') {
    defaultProps.textColor = 'green.500';
    return <CButton
      {...props}
      {...defaultProps}
      borderColor='green.500'
      _hover={{ backgroundColor: 'green.500', textColor: 'white', ...props._hover }}
      as="button"
    />
  }

  return <CButton {...props} as="button" />
}