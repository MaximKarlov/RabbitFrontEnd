import { useSelector } from 'react-redux';
import * as MUI from '@mui/material';
import { getRabbitsBreed } from '../../redux/rabbits/rabbitsSelector';

export const GetRabbitBreedList = ({ breedSelect, onChangeBreed }) => {
  // Отримуємо частини стану
  const breed = useSelector(getRabbitsBreed);
  // const isLoading = useSelector(getIsLoading);

  return (
    <MUI.FormControl fullWidth>
      <MUI.InputLabel id="Breed">Breed</MUI.InputLabel>
      <MUI.Select
        labelId="Breed"
        id="Breed"
        value={breedSelect}
        label="Breed"
        onChange={onChangeBreed}
      >
        {breed.map(breed => {
          return (
            <MUI.MenuItem key={breed.name} value={breed.name}>
              {breed.name}
            </MUI.MenuItem>
          );
        })}
      </MUI.Select>
    </MUI.FormControl>
  );
};
