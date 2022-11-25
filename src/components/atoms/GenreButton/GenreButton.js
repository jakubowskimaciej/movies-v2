import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

const StyledButton = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({ isBig }) => (isBig ? '1rem 2.4rem' : '0.5rem 1rem')};
  margin: 1rem 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  color: var(--color-lightGrey);
  background-color: transparent;
  text-decoration: none;
  text-transform: capitalize;
  border: 0.1rem solid transparent;
  border-radius: 5rem;
  transition: all 200ms ease;

  &:hover {
    border: 0.1rem solid var(--color-lightGrey);
  }

  &.active {
    border: 0.1rem solid var(--color-white);
    color: white;
  }
`;

const GenreButton = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <FontAwesomeIcon icon={faCircleDot} style={{ marginRight: '10px' }} />{' '}
      {children}
    </StyledButton>
  );
};

export default GenreButton;
