import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { fetchCurrentUser } from '../redux/auth/authOperation';
import { fetchCurrentRabbits } from '../redux/rabbits/rabbitsOperation';
import {fetchFeeds} from '../redux/feed/feedOperation'

import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Resendemail = lazy(()=> import("../pages/reSendEmail"))
const Login = lazy(() => import('../pages/Login'));
const Rabbits = lazy(() => import('../pages/Rabbits'));
const AddRabbit = lazy(() => import('../pages/AddRabbit'));
const RabbitBreed = lazy(() => import('../pages/RabbitBreed'));
const Feed = lazy(()=> import ('../pages/Feed'))
const VerSucces = lazy(()=> import ('../pages/VerificationSuccess'))

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
    dispatch(fetchCurrentRabbits());
    dispatch(fetchFeeds());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/login/resend"
                component={<Register />}
              />
            }
          />

          <Route
            path="/users/verificationSucces"
            element={
              <PrivateRoute redirectTo="/users" component={<VerSucces />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/rabbits" component={<Login />} />
            }
          />
          <Route
            path="/login/resend"
            element={
              <RestrictedRoute
                redirectTo="/rabbits"
                component={<Resendemail />}
              />
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
          <Route
            path="/rabbits/FeedList"
            element={
              <PrivateRoute redirectTo="/rabbits" component={<Feed />} />
            }
          />
          <Route
            path="/tuya/getToken"
            element={
              <PrivateRoute redirectTo="/tuya" component={<RabbitBreed />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
