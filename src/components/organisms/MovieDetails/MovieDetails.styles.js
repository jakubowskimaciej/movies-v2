import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  padding: 4rem;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;

  img {
    max-width: 40rem;
    object-fit: cover;
    border-radius: 1.6rem;
    box-shadow: 0 1rem 5rem -1.5rem rgb(115 124 142);
  }
`;

export const LinkWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
`;

export const MovieInfo = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
  padding-left: 4rem;
`;

export const MovieTitle = styled.div`
  margin-bottom: 2rem;

  p {
    margin-top: -1rem;
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 600;
    color: var(--color-darkGrey);
    text-transform: uppercase;
  }
`;

export const MovieDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 2rem;
  margin-bottom: 5rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: var(--color-grey);
    font-weight: 600;
    text-transform: uppercase;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const StyledInfoTitle = styled(StyledTitle)`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-darkGrey);
  margin-bottom: 0.5rem;
`;

export const InfoWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin: 0 0 3rem 1rem;

  p {
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: none;
    color: var(--color-darkGrey);
  }
`;

export const GenreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  border: 1px red;
`;

export const GenreButton = styled(Button)`
  margin-right: 1rem;
  min-width: unset;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-lightGrey);
  border: 0.1rem solid lightGrey;
  box-shadow: none;

  &:hover {
    color: var(--color-darkGrey);
    border: 0.1rem solid var(--color-darkGrey);
    box-shadow: none;
  }
`;

export const RecommendedWrapper = styled.div`
  padding: 4rem;
`;

export const StyledIframe = styled.iframe`
  border: 0.1rem solid var(--shadow);
  border-radius: 0.7rem;
  box-shadow: 0 1rem 1rem -0.5rem var(--shadow);
  width: 100%;
  height: 44rem;
`;

export const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '720px',
  bgcolor: 'transparent',
  filter: 'drop-shadow(0 0 5.75rem #2d3436)',
  outline: 'none',
};
