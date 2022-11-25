import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;

  svg {
    position: absolute;
    width: 50%;
    height: 50%;
    top: 20%;
    left: -2.5%;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  text-align: center;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    text-align: center;
    margin: 2rem 0;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-bottom: 2rem;

    i {
      color: var(--color-grey);
    }
  }
`;
