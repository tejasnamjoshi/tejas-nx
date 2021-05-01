import './button.scss';

import BootstrapButton, { ButtonProps as BootstrapButtonProps } from 'react-bootstrap/Button';
import { ButtonVariant } from 'react-bootstrap/esm/types';

/* eslint-disable-next-line */
export interface ButtonProps extends Omit<BootstrapButtonProps, 'size'> {
  variant?: ButtonVariant;
  size?: 'sm' | 'lg' | 'xl' | 'xxl';
}

export function Button(props: ButtonProps) {
  const { size, ...rest } = props;
  return (
    <BootstrapButton {...rest} size={size as any}>
      This is a custom bootstrap button.
    </BootstrapButton>
  );
}

export default Button;
