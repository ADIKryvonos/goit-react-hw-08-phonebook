import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/UserNavigation/Header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
