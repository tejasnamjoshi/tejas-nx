import { Button, ButtonProps } from './button';

export default {
  component: Button,
  title: 'Button',
};

export const primary = () => {
  const props: ButtonProps = {
    variant: 'primary',
  };

  return <Button variant={props.variant} />;
};

export const secondary = () => {
  const props: ButtonProps = {
    variant: 'secondary',
  };

  return <Button variant={props.variant} />;
};

export const dark = () => {
  const props: ButtonProps = {
    variant: 'dark',
  };

  return <Button variant={props.variant} />;
};
