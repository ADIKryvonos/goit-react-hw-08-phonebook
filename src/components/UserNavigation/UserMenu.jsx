import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/userAuth';
import { UserWrap, P, Button } from './UserNavigation.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  return (
    <UserWrap>
      <P>
        Welcome, <b>{userName}</b>
      </P>
      <Button type="button" onClick={() => dispatch(userLogOut())}>
        <b>Logout</b>
      </Button>
    </UserWrap>
  );
};
