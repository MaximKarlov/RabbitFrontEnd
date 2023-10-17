import * as React from 'react';
import List from '@mui/material/List';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from '../Loader/Loader';
import { useEffect } from 'react';
// import Notiflix from 'notiflix';
import RabbitBreedItems from '../RabbitBreed/RabbitBreedItems';
import { fetchRabbitsBreed } from '../../redux/rabbits/rabbitsOperation';
import {
  getRabbitsBreed,
  getIsLoading,
} from '../../redux/rabbits/rabbitsSelector';

export const RabbitBreedList = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  // const { rabbits } = useSelector(getRabbits);
  const breed = useSelector(getRabbitsBreed);
  const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchRabbitsBreed());
  }, [dispatch]);

  console.log('===BreedList===', breed);
  return (
    <List>
      {isLoading ? <Loader /> : <RabbitBreedItems BreedList={breed} />}
    </List>
  );
};
