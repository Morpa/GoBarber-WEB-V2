import React, { ButtonHTMLAttributes } from 'react';
import Loader from 'react-loader-spinner';

import * as S from './style';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <S.Container type="button" {...rest}>
    {loading ? (
      <Loader type="ThreeDots" height={15} width={50} color="#000000" />
    ) : (
      children
    )}
  </S.Container>
);

export default Button;
