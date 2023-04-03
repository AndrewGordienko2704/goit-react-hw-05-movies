import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: calc(100vw - 48px);
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
export const Item = styled.li`
  max-width: 300px;
  max-height: 450px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.04);
  }
`;
export const Img = styled.img`
  max-width: 300px;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const Text = styled.p`
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #9d99cd68;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #99a4f7;
  }
`;