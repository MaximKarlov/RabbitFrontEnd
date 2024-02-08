// import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as MUI from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  deleteRabbitBreed,
  fetchRabbitsBreed,
} from '../../redux/rabbits/rabbitsOperation';

export default function RabbitBreedItems({ BreedList }) {
  // const [rowSelectionModel, setRowSelectionModel] = useState([]);
  // const [elementToDeleteKey, setElementToDeleteKey] = useState([]);
  const dispatch = useDispatch();
  let counterID = 0;
  // const rowsRabbitBreed = [];
  // let elementToDeleteKey = [];

  // BreedList.map(el =>
  //   rowsRabbitBreed.push({
  //     id: (counterID += 1),
  //     name: el.name,
  //     color: el.color,
  //     about: el.about,
  //     key: el._id,
  //   })
  // );

  // const makeListToDelete = element => {
  //   const listToDelete = [];
  //   setRowSelectionModel(element);
  //   rowSelectionModel.map(
  //     id =>
  //       rowsRabbitBreed.map(el => {
  //         if (el.id === id) {
  //           listToDelete.push(el.key);
  //         }
  //         return listToDelete;
  //       }),
  //     setElementToDeleteKey(listToDelete)
  //   );
  // };

  // console.log('deleting2 elementToDeleteKey', elementToDeleteKey);

  const deleteBreed = e => {
    const breedID = e.target.getAttribute('id');
    dispatch(deleteRabbitBreed(breedID)).then(() =>
      dispatch(fetchRabbitsBreed())
    );
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <MUI.TableContainer component={MUI.Paper}>
        <MUI.Table
          sx={{ minWidth: 650 }}
          size="small"
          aria-label="a dense table"
        >
          <MUI.TableHead>
            <MUI.TableRow>
              <MUI.TableCell align="center">ID</MUI.TableCell>
              <MUI.TableCell align="center">Name</MUI.TableCell>
              <MUI.TableCell align="center">Color</MUI.TableCell>
              <MUI.TableCell align="center">About</MUI.TableCell>
            </MUI.TableRow>
          </MUI.TableHead>
          <MUI.TableBody>
            {BreedList.map(row => (
              <MUI.TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <MUI.TableCell component="th" scope="row" align="center">
                  {(counterID += 1)}
                </MUI.TableCell>
                {/* <TableCell align="center">{row.id}</TableCell> */}
                <MUI.TableCell align="right">{row.name}</MUI.TableCell>
                <MUI.TableCell align="right">{row.color}</MUI.TableCell>
                <MUI.TableCell align="center">{row.about}</MUI.TableCell>
                <MUI.TableCell align="center">
                  <MUI.Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    type="text"
                    // className={ContactCss.btn}
                    // onClick={findBreed}
                  >
                    Edit
                  </MUI.Button>
                </MUI.TableCell>
                <MUI.TableCell align="center">
                  <MUI.Button
                    id={row._id}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    type="text"
                    // className={ContactCss.btn}
                    onClick={deleteBreed}
                  >
                    Delete
                  </MUI.Button>
                </MUI.TableCell>
              </MUI.TableRow>
            ))}
          </MUI.TableBody>
        </MUI.Table>
      </MUI.TableContainer>
    </div>
  );
}
