import { Navigate } from 'react-router-dom';
import { useAuth } from './Provider';

export const GuestGuard = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }
  return children;
};

export const AuthGuard = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};
