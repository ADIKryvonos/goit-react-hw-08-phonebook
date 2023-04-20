import { useSelector } from 'react-redux';
import {
  selectLoggedIn,
  selectUserName,
  selectIsRefreshing,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const userName = useSelector(selectUserName);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isLoggedIn,
    userName,
    isRefreshing,
  };
};
