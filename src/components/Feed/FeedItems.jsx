import { useState } from 'react';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import * as MUI from '@mui/material';
import * as MuiIcon from '@mui/icons-material';
import { deleteFeed, fetchFeeds } from '../../redux/feed/feedOperation';
import { AddFeedModal } from '../Feed/AddFeedModal';
import feedCss from './feed.module.css';

export default function FeedItems({ FeedsList }) {
  const [editFeed, setEditFeed] = useState(false);
  const [feedId, setFeedId] = useState('');
  // const [expence, setExpence] = useState(0);
  const dispatch = useDispatch();
  let counterID = 0;
  let expence = 0;


  const deleteBreed = e => {
    const feedID = e.target.getAttribute('id');
    dispatch(deleteFeed(feedID)).then(() => dispatch(fetchFeeds()));
  };

  const openClick = e => {
    const feedID = e.target.getAttribute('id');
    setEditFeed(true);
    setFeedId(feedID);
  };

  const closeClick = () => {
    setEditFeed(false);
  };

  const expenceFunc = (price,quantity) =>{
    const sum = price * quantity;
    expence+=sum;
    return sum;
  }

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
              <MUI.TableCell align="center">К-сть(мішків)</MUI.TableCell>
              <MUI.TableCell align="center">К-сть(кг)</MUI.TableCell>
              <MUI.TableCell align="center">Ціна(за кг)</MUI.TableCell>
              <MUI.TableCell align="center">Сума</MUI.TableCell>
            </MUI.TableRow>
          </MUI.TableHead>
          <MUI.TableBody>
            {FeedsList.map(row => (
              <MUI.TableRow
                _id={row._id}
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <MUI.TableCell component="th" scope="row" align="center">
                  {(counterID += 1)}
                </MUI.TableCell>
                <MUI.TableCell align="right">
                  {dayjs(row.date).format('DD.MM.YYYY')}
                </MUI.TableCell>
                <MUI.TableCell align="right">{row.name}</MUI.TableCell>
                <MUI.TableCell align="center">{row.bags}</MUI.TableCell>
                <MUI.TableCell align="center">{row.quantity}</MUI.TableCell>
                <MUI.TableCell align="center">{row.price}</MUI.TableCell>
                <MUI.TableCell align="center">{expenceFunc(row.price,row.quantity)}</MUI.TableCell>
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
      <div className={feedCss.expence}>
        <span>Загальні витрати :</span>
        <span className={feedCss.expenceSum}>{expence}</span>
      </div>
    </div>
  );
}
