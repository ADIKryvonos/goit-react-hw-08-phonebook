import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useAuth } from 'hooks/userAuth';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/LogIn'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
