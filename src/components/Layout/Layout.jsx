import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Header, StyledLink, Box } from './Layout.styled';
export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Main>
        <Suspense fallback={<Box>Loading subpage...</Box>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};