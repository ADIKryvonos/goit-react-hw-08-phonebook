import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/userAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  return (
    <div>
      <p>Welcome, {userName}</p>
      <button type="button" onClick={() => dispatch(userLogOut())}>
        Logout
      </button>
    </div>
  );
};
