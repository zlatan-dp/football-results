import { Link } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/results">GameDay</Link>}
    </nav>
  );
};
