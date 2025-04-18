import { useSelector, useDispatch } from 'react-redux';
import { Loader } from '../Loader/Loader';
import { useEffect, useState } from 'react';
import * as MUI from '@mui/material';
import { NavLink } from 'react-router-dom';
import RabbitBreedItems from '../RabbitBreed/RabbitBreedItems';
import { fetchRabbitsBreed } from '../../redux/rabbits/rabbitsOperation';
import {
  getRabbitsBreed,
  getIsLoading,
} from '../../redux/rabbits/rabbitsSelector';
import { RabbitBreedModal } from '../RabbitBreedModal/RabbitBreedModal';

export const RabbitBreedList = () => {
  const [addBreed, setAddBreed] = useState(false);
  const dispatch = useDispatch();

  // Отримуємо частини стану
  const breed = useSelector(getRabbitsBreed);
  const isLoading = useSelector(getIsLoading);

  const openClick = () => {
    setAddBreed(true);
  };

  const closeClick = () => {
    setAddBreed(false);
  };
  useEffect(() => {
    dispatch(fetchRabbitsBreed());
  }, [dispatch]);

  return (
    <div>
      <div>
        {isLoading ? <Loader /> : <RabbitBreedItems BreedList={breed} />}
      </div>
      <NavLink to="/rabbits" className={CSS.linked}>
        <MUI.Button variant="outlined" onClick={openClick}>
          {`<-`} Back
        </MUI.Button>
      </NavLink>
      <MUI.Button variant="outlined" onClick={openClick}>
        Add Breed
      </MUI.Button>
      {addBreed ? (
        <RabbitBreedModal open={addBreed} close={closeClick} edit={false} />
      ) : (
        ''
      )}
    </div>
  );
};
