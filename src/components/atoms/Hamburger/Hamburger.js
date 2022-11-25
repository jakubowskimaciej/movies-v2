import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 2rem;
  left: 5rem;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  width: 25px;
  line-height: 1;
  height: auto;
  background-color: transparent;
  cursor: pointer;
  z-index: 10;
`;

const Bar = styled.span`
  transition: all 0.3s;
  border-radius: 10px;
  margin: 2px 0;
  height: 4px;
  width: 100%;
  display: inline-block;
  background-color: var(--color-darkGrey);
`;

const Hamburger = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <Bar />
      <Bar />
      <Bar />
    </Wrapper>
  );
};

export default Hamburger;
