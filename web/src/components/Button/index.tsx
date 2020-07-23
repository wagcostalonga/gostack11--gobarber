import React, { ButtonHTMLAttributes } from 'react';

import { BtnComponent } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <BtnComponent type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </BtnComponent>
);

export default Button;
