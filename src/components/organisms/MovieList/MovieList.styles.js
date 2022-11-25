import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  place-content: space-between space-evenly;
  align-items: start;
  padding: 4rem 0;
  gap: 0.5rem 3rem;
`;
