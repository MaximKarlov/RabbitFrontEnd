import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as MUI from '@mui/material';
import * as MuiIcon from '@mui/icons-material/';
import {
  deleteRabbitBreed,
  fetchRabbitsBreed,
  // updateRabbitsBreed,
} from '../../redux/rabbits/rabbitsOperation';
import { RabbitBreedModal } from '../RabbitBreedModal/RabbitBreedModal';

export default function RabbitBreedItems({ BreedList }) {
  const [editBreed, setEditBreed] = useState(false);
  const [breedId, setBreedId] = useState('');
  const dispatch = useDispatch();
  let counterID = 0;

  const deleteBreed = e => {
    const breedID = e.target.getAttribute('id');
    dispatch(deleteRabbitBreed(breedID)).then(() =>
      dispatch(fetchRabbitsBreed())
    );
  };

  const openClick = e => {
    // console.dir('openClick', e);
    const breedID = e.target.getAttribute('id');
    setEditBreed(true);
    setBreedId(breedID);
  };

  const closeClick = () => {
    setEditBreed(false);
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
                <MUI.TableCell align="right">{row.name}</MUI.TableCell>
                <MUI.TableCell align="right">{row.color}</MUI.TableCell>
                <MUI.TableCell align="center">{row.about}</MUI.TableCell>
                <MUI.TableCell align="center">
                  <MUI.Button
                    id={row._id}
                    variant="outlined"
                    startIcon={<MuiIcon.Edit />}
                    type="text"
                    onClick={openClick}
                  >
                    Edit
                  </MUI.Button>
                </MUI.TableCell>
                <MUI.TableCell align="center">
                  <MUI.Button
                    id={row._id}
                    variant="outlined"
                    startIcon={<MuiIcon.Delete />}
                    type="text"
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
      {editBreed ? (
        <RabbitBreedModal
          open={editBreed}
          close={closeClick}
          edit={true}
          id={breedId}
        />
      ) : (
        ''
      )}
    </div>
  );
}
