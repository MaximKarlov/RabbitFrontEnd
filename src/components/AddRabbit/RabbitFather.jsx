// import { useSelector } from 'react-redux';
import * as MUI from '@mui/material';
// import { getRabbits } from '../../redux/rabbits/rabbitsSelector';

export const RabbitFather = ({ father, onChangeFather }) => {
  // Отримуємо частини стану
  // const { rabbits } = useSelector(getRabbits);
  // const isLoading = useSelector(getIsLoading);

  return (
    <MUI.FormControl fullWidth>
      <MUI.InputLabel id="Father">Father</MUI.InputLabel>
      <MUI.Select
        labelId="Father"
        id="Father"
        value={father}
        label="Father"
        onChange={onChangeFather}
      >
        <MUI.MenuItem value="-">-</MUI.MenuItem>
        {/* {rabbits.map(el =>
          el.gender === 'Самець' ? (
            <MUI.MenuItem id={el._id} key={el._id} value={el.name}>
              {el.name}
            </MUI.MenuItem>
          ) : (
            <MUI.MenuItem value="-">-</MUI.MenuItem>
          )
        )} */}
      </MUI.Select>
    </MUI.FormControl>
  );
};
