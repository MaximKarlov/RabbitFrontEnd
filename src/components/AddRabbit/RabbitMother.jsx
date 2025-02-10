import { useSelector } from 'react-redux';
import * as MUI from '@mui/material';
import { getRabbits } from '../../redux/rabbits/rabbitsSelector';

export const RabbitMother = ({ mother, onChangeMother }) => {
  // Отримуємо частини стану
  const { rabbits } = useSelector(getRabbits);
  // const isLoading = useSelector(getIsLoading);

  return (
    <MUI.FormControl fullWidth>
      <MUI.InputLabel id="Mother">Mother</MUI.InputLabel>
      <MUI.Select
        labelId="Mother"
        id="Mother"
        value={mother}
        label="Mother"
        onChange={onChangeMother}
      >
        {rabbits.map(el =>
          el.gender === 'Самка' ? (
            <MUI.MenuItem id={el._id} key={el._id} value={el.name}>
              {el.name}
            </MUI.MenuItem>
          ) : (
            <MUI.MenuItem value="-">-</MUI.MenuItem>
          )
        )}
      </MUI.Select>
    </MUI.FormControl>
  );
};
