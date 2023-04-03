import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Main = styled.main`
  max-width: calc(100vw);
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-width: calc(100vw);
`;
export const StyledLink = styled(NavLink)`
  margin: 25px;
  padding: 25px;
  font-size: 25px;
  font-weight: 700;
  text-decoration: none;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #9d99cd68;
  &.active,
  &:hover {
    color: #99a4f7;
  }
`;

export const Box = styled.div`
  display: grid;
  place-items: center;
  margin: 25px;
  font-size: 25px;
  font-weight: 700;
  color: #99a4f7;
`;