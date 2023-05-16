import { Suspense } from 'react';
import { Wrapper } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};
