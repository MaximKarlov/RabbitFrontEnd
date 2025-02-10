import { useSelector, useDispatch } from 'react-redux';
import { RabbitsItem } from './Rabbits_item';
// import { AddRabbitModal } from '../AddRabbitModal/AddRabbitModal';
import { Loader } from '../Loader/Loader';
import { useEffect } from 'react';

import {
  fetchRabbits,
  fetchRabbitsBreed,
} from '../../redux/rabbits/rabbitsOperation';
import {
  getRabbits,
  // getRabbitsBreed,
  // getError,
  getIsLoading,
} from '../../redux/rabbits/rabbitsSelector';

export const RabbitList = () => {
  const dispatch = useDispatch();

  // Отримуємо частини стану
  const { rabbits } = useSelector(getRabbits);
  const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchRabbits());
    dispatch(fetchRabbitsBreed());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : rabbits ? (
        <RabbitsItem Rabbits={rabbits} />
      ) : null}
    </div>
  );
};
