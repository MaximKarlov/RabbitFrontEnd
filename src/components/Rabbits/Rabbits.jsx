import { useSelector, useDispatch } from 'react-redux';
import  RabbitsItem  from './Rabbits_item';
import { Loader } from '../Loader/Loader';
import { useEffect } from 'react';

import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
      <div style={{ height: 400, width: '100%' }}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
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
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={12} align="center">
                      <Loader />
                    </TableCell>
                  </TableRow>
                ) : rabbits && rabbits.length > 0 ? (
                  <RabbitsItem Rabbits={rabbits} />
                ) : (
                  <TableRow>
                    <TableCell colSpan={12} align="center">
                      Немає даних
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};
