import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { fetchCurrentUser } from '../redux/auth/authOperation';
import { fetchCurrentRabbits } from '../redux/rabbits/rabbitsOperation';
import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Rabbits = lazy(() => import('../pages/Rabbits'));
const AddRabbit = lazy(() => import('../pages/AddRabbit'));
const RabbitBreed = lazy(() => import('../pages/RabbitBreed'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
    dispatch(fetchCurrentRabbits());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/rabbits" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/rabbits" component={<Login />} />
            }
          />

          <Route
            path="/rabbits"
            element={<PrivateRoute redirectTo="/" component={<Rabbits />} />}
          />
          <Route
            path="/rabbits/addRabbit"
            element={
              <PrivateRoute redirectTo="/rabbits" component={<AddRabbit />} />
            }
          />
          <Route
            path="/rabbits/breedList"
            element={
              <PrivateRoute redirectTo="/rabbits" component={<RabbitBreed />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
