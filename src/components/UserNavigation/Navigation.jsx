import { useAuth } from 'hooks/userAuth';
import { Link, Nav } from './UserNavigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
};
