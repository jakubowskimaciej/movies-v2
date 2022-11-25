import React from 'react';
import { Wrapper, ChildrenWrapper } from './MainTemplate.styles';
import Navigation from 'components/molecules/Navigation/Navigation';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

export default MainTemplate;
