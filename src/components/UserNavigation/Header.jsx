import { UserMenu } from 'components/UserNavigation/UserMenu';
import { Navigation } from './Navigation';
import { AuthNav } from 'components/UserNavigation/AuthNav';
import { useAuth } from 'hooks/userAuth';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
