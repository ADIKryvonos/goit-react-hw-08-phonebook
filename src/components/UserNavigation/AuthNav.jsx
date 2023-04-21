import { AuthWrap, Link } from './UserNavigation.styled';

export const AuthNav = () => {
  return (
    <AuthWrap>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </AuthWrap>
  );
};
