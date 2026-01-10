import { useDispatch } from 'react-redux';
import {
  deleteRabbit,
  findRabbitById,
  fetchRabbits,
} from '../../redux/rabbits/rabbitsOperation';
import { Button } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';

const RabbitsItem = ({ Rabbits }) => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);

  const rowsRabbit = [];

  Rabbits.map(el =>
    rowsRabbit.push({
      id: Rabbits.indexOf(el) + 1,
      _id: el._id,
      gender: el.gender,
      name: el.name,
      breed: el.breed,
      photoRabbit: el.photoRabbit,
      dateBirthDay: el.dateBirthDay,
      cage: el.cage,
      mother: el.mother,
      father: el.father,
      favorite: el.favorite,
    })
  );

  const deleteRabbits = e => {
    const rabbitID = e.target.parentElement.parentElement.getAttribute('_id');
    dispatch(deleteRabbit(rabbitID)).then(() => dispatch(fetchRabbits()));
  };

  const findRabbits = e => {
    const rabbitID = e.target.parentElement.parentElement.getAttribute('_id');
    dispatch(findRabbitById(rabbitID));
  };

  return (
    <>
      {rowsRabbit.map(row => (
        <TableRow
          _id={row._id}
          key={row._id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row" align="center">
            {row.id}
          </TableCell>
          {/* <TableCell align="center">{row.id}</TableCell> */}
          <TableCell align="right">{row.name}</TableCell>
          <TableCell align="right">{row.gender}</TableCell>
          <TableCell align="right">{row.breed}</TableCell>
          <TableCell align="right">{row.dateBirthDay}</TableCell>
          <TableCell align="right">{row.mother}</TableCell>
          <TableCell align="right">{row.father}</TableCell>
          <TableCell align="right">{row.cage}</TableCell>
          <TableCell align="right">{row.photoRabbit}</TableCell>
          <TableCell align="right">{row.favorite.toString()}</TableCell>
          <TableCell align="center">
            <Button
              variant="outlined"
              startIcon={<Edit />}
              type="text"
              // className={ContactCss.btn}
              onClick={findRabbits}
            >
              Edit
            </Button>
          </TableCell>
          <TableCell align="center">
            <Button
              variant="outlined"
              startIcon={<Delete />}
              type="text"
              // className={ContactCss.btn}
              onClick={deleteRabbits}
            >
              Delete
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </>
  );

};
  export default RabbitsItem;