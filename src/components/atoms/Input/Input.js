import styled from 'styled-components';

export const Input = styled.input`
  width: 22rem;
  padding: 0.8rem 1.8rem;
  margin-right: 10rem;
  border: 0.1rem solid var(--color-lightGrey);
  border-radius: 5rem;
  transition: all 200ms ease-in-out;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  color: var(--color-darkGrey);
  font-size: ${({ theme }) => theme.fontSize.l};

  &:active,
  &:focus {
    width: 32.5rem;
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }

  &::placeholder {
    text-align: right;
    margin-right: 1rem;
  }
`;
