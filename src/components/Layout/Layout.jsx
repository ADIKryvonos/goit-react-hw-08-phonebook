import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/UserNavigation/Header';
import { MainWrap } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <MainWrap>
          <Outlet />
        </MainWrap>
      </Suspense>
    </>
  );
};
