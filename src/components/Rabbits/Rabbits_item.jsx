import { useDispatch, useSelector } from 'react-redux';
import {
  deleteRabbit,
  findRabbitById,
  fetchRabbits,
} from '../../redux/rabbits/rabbitsOperation';
import { getIsLoading } from '../../redux/rabbits/rabbitsSelector';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
let counterID = 0;

export const RabbitsItem = Rabbits => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const rowsRabbit = [];

  Rabbits.Rabbits.map(el =>
    rowsRabbit.push({
      id: (counterID += 1),
      _id: el._id,
      gender: el.gender,
      name: el.name,
      breed: el.breed,
      photoRabbit: el.photoRabbit,
      dateBirthDay: el.dateBirthDay,
      cage: el.cage,
      Mother: el.Mother,
      Father: el.Father,
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
  // console.log(rowsRabbit);

  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* <DataGrid
        rows={rowsRabbit}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50]}
        checkboxSelection
        onRowSelectionModelChange={newRowSelectionModel => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        sx={{ cursor: 'pointer', border: 'none' }}
        scope="row"
      /> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Breed</TableCell>
              <TableCell align="center">Date BirthDay</TableCell>
              <TableCell align="right">Mother</TableCell>
              <TableCell align="right">Father</TableCell>
              <TableCell align="right">cage</TableCell>
              <TableCell align="right">Photo Rabbit</TableCell>
              <TableCell align="right">favorite</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
                <TableCell align="right">{row.Mother}</TableCell>
                <TableCell align="right">{row.Father}</TableCell>
                <TableCell align="right">{row.cage}</TableCell>
                <TableCell align="right">{row.photoRabbit}</TableCell>
                <TableCell align="right">{row.favorite.toString()}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
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
                    startIcon={<DeleteIcon />}
                    type="text"
                    // className={ContactCss.btn}
                    onClick={deleteRabbits}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
