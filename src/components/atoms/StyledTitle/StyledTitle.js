import styled from 'styled-components';

export const StyledTitle = styled.h2`
  font-size: ${({ theme, isLarge }) =>
    isLarge ? theme.fontSize.xxxl : theme.fontSize.xxl};
  font-weight: ${({ isLarge }) => (isLarge ? 300 : 200)};
  color: var(--color-darkGrey);
  text-transform: capitalize;
`;
