import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 35px;
  max-width: calc(100vw - 48px);
  margin: 0 auto;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  width: 180px;
  height: 180px;
  transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
`;
export const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  /* border-radius: 10px 10px 0 0; */
`;
export const Title = styled.h2`
  padding: 5px;
  font-size: 18px;
  font-weight: 500;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #99a4f7;
  }
`;

export const Text = styled.p`
  padding: 2px;
  font-size: 14px;
  font-weight: 400;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #99a4f7;
  }
`;