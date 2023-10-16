import { Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth/authSelector';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  return isLoggedIn ? Component : <Navigate to={'/'} />;
};
