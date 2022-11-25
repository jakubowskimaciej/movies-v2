import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../atoms/Button/Button';
import { StyledInfo, Wrapper } from './Error.styles';
import { ReactComponent as Void } from 'assets/void.svg';

const Error = () => {
  const navigate = useNavigate();

  return (
    <Wrapper id="error-page">
      <Void />
      <StyledInfo>
        <h2>Oops!</h2>
        <p>Sorry, an unexpected error has onccurred</p>

        <Button onClick={() => navigate('/')}>Go to main page</Button>
      </StyledInfo>
    </Wrapper>
  );
};

export default Error;
