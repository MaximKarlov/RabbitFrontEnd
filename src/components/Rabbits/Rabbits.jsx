import { useSelector, useDispatch } from 'react-redux';
import { RabbitsItem } from './Rabbits_item';
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
  // const breed = useSelector(getRabbitsBreed);
  const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchRabbits());
    dispatch(fetchRabbitsBreed());
  }, [dispatch]);

  // const options = rabbits;
  // console.log('options', options);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : rabbits.status === 200 ? (
        <RabbitsItem Rabbits={rabbits.data} />
      ) : null}
    </div>
  );
};
