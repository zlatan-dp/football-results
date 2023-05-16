import { useAuth } from 'hooks/useAuth';
import { UserMenuWrap, UserName } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <UserMenuWrap>
      <UserName>Welcome, {user.login}</UserName>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </UserMenuWrap>
  );
};
