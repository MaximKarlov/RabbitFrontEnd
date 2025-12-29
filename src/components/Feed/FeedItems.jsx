import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as MUI from '@mui/material';
import * as MuiIcon from '@mui/icons-material/';
import { deleteFeed, fetchFeeds } from '../../redux/feed/feedOperation';
import { AddFeedModal } from '../Feed/AddFeedModal';

export default function FeedItems({ FeedsList }) {
  const [editFeed, setEditFeed] = useState(false);
  const [feedId, setFeedId] = useState('');
  const dispatch = useDispatch();
  let counterID = 0;


  const deleteBreed = e => {
    const feedID = e.target.getAttribute('id');
    dispatch(deleteFeed(feedID)).then(() => dispatch(fetchFeeds()));
  };

  const openClick = e => {
    // console.dir('openClick', e);
    const breedID = e.target.getAttribute('id');
    setEditFeed(true);
    setFeedId(breedID);
  };

  const closeClick = () => {
    setEditFeed(false);
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
              <MUI.TableCell align="center">Дата</MUI.TableCell>
              <MUI.TableCell align="center">Назва</MUI.TableCell>
              <MUI.TableCell align="center">Кількість</MUI.TableCell>
              <MUI.TableCell align="center">Ціна(за кг)</MUI.TableCell>
              <MUI.TableCell align="center">Сума</MUI.TableCell>
            </MUI.TableRow>
          </MUI.TableHead>
          <MUI.TableBody>
            {FeedsList.map(row => (
              <MUI.TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <MUI.TableCell component="th" scope="row" align="center">
                  {(counterID += 1)}
                </MUI.TableCell>
                <MUI.TableCell align="right">{row.date}</MUI.TableCell>
                <MUI.TableCell align="right">{row.name}</MUI.TableCell>
                <MUI.TableCell align="center">{row.price}</MUI.TableCell>
                <MUI.TableCell align="center">{row.quantity}</MUI.TableCell>
                <MUI.TableCell align="center">{row.quantity*row.price}</MUI.TableCell>
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
      {editFeed ? (
        <AddFeedModal
          open={editFeed}
          close={closeClick}
          edit={true}
          id={feedId}
        />
      ) : (
        ''
      )}
    </div>
  );
}
