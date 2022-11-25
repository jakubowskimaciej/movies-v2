import React from 'react';
import { LinkWrapper, LogoWrapper } from './Logo.styles';

const Logo = ({ onClick }) => {
  return (
    <LinkWrapper onClick={onClick}>
      <LogoWrapper />
    </LinkWrapper>
  );
};

export default Logo;
