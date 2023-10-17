import { useSelector, useDispatch } from 'react-redux';
import { RabbitsItem } from './Rabbits_item';
import { Loader } from '../Loader/Loader';
import { useEffect } from 'react';
import Notiflix from 'notiflix';
import { fetchRabbits } from '../../redux/rabbits/rabbitsOperation';
// import RabbitsCss from './Rabbits.module.css';
import {
  getRabbits,
  getError,
  getIsLoading,
  getRabbitsBreed,
} from '../../redux/rabbits/rabbitsSelector';

export const RabbitList = () => {
  const dispatch = useDispatch();

  // Отримуємо частини стану
  const { rabbits } = useSelector(getRabbits);
  const breed = useSelector(getRabbitsBreed);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchRabbits());
  }, [dispatch]);

  const options = rabbits;

  console.log('error!', error);
  console.log('options', options);
  console.log('breed', breed);
  console.log('options.lenght!', options.length);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error == null ? (
        options.length !== 0 ? (
          <RabbitsItem Rabbits={rabbits} />
        ) : (
          Notiflix.Notify.failure(
            'Ще не додано жодного кролика. Будь ласка додайте кролика!!!'
          )
        )
      ) : null}
    </div>
  );
};
