import styled from '@emotion/styled';

export const List = styled.ul`
  align-items: center;
  max-width: calc(100vw - 48px);
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const Item = styled.li`
  margin: 15px;
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h2`
  padding: 15px;
  font-size: 18px;
  font-weight: 500;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #99a4f7;
  }
`;

export const Text = styled.p`
  padding: 10px 30px;
  font-size: 14px;
  font-weight: 400;
  transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #99a4f7;
    font-size: 16px;
  }
`;
