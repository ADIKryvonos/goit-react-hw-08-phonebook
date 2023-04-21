import { UserMenu } from 'components/UserNavigation/UserMenu';
import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav';
import { useAuth } from 'hooks/userAuth';
import { HeaderWrap } from './UserNavigation.styled';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderWrap>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderWrap>
  );
};
