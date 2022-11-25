import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: transform 300ms cubic-bezier(0.3, 0.43, 0.96, 0.64);
  text-decoration: none;
  color: var(--color-darkGrey);

  img {
    box-shadow: 0 1rem 0.9rem -0.5rem rgb(115 124 142);

    &:hover {
      box-shadow: none;
    }
  }

  &:hover {
    transform: scale(1.03);
    color: var(--color-white);
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-darkGrey);
    border-radius: 1.6rem;
    z-index: -1;
    opacity: 0;
    transform: scale(0.9);
    transform-origin: top;
    transition: all 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
    box-shadow: 0 1rem 0.9rem -0.5rem rgb(115 124 142);
  }
`;

export const InfoWrapper = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  text-align: center;
`;
