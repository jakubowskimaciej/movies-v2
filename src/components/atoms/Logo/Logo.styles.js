import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/logo.svg';

export const LinkWrapper = styled.div`
  width: 100%;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export const LogoWrapper = styled(Logo)`
  max-width: 75%;
  max-height: 100%;
`;
