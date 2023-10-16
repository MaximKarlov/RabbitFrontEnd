import { Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth/authSelector';
import { useSelector } from 'react-redux';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  return !isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
