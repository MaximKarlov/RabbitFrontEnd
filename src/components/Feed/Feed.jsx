import { useSelector, useDispatch } from 'react-redux';
import { Loader } from '../Loader/Loader';
import { useEffect, useState } from 'react';
import * as MUI from '@mui/material';
import { NavLink } from 'react-router-dom';
import FeedItems from '../Feed/FeedItems';
import { fetchFeeds } from '../../redux/feed/feedOperation';
import { getFeeds, getFeedLoading } from '../../redux/feed/feedSelector';
import { AddFeedModal } from './AddFeedModal';

export const Feed = () => {
  const [addFeed, setAddFeed] = useState(false);
  const dispatch = useDispatch();

  // Отримуємо частини стану
  const feeds = useSelector(getFeeds);
  const isLoading = useSelector(getFeedLoading);
  

  const openClick = () => {
    setAddFeed(true);
  };

  const closeClick = () => {
    setAddFeed(false);
  };
  useEffect(() => {
    dispatch(fetchFeeds());
  }, [dispatch]);

  return (
    <div>
      <div> {isLoading ? <Loader /> : <FeedItems FeedsList={feeds} />}</div>
      <NavLink to="/rabbits" className={CSS.linked}>
        <MUI.Button variant="outlined" onClick={openClick}>
          {`<-`} Back
        </MUI.Button>
      </NavLink>
      <MUI.Button variant="outlined" onClick={openClick}>
        Add bay Feed
      </MUI.Button>
      {addFeed ? (
        <AddFeedModal open={addFeed} close={closeClick} edit={false} />
      ) : (
        ''
      )}
    </div>
  );
};
