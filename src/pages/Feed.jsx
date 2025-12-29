import AppCss from '../components/App.module.css';
import { Feed } from '../components/Feed/Feed';

const FeedList = () => {
  return (
    <div className={AppCss.component}>
      <h1>Feeds List</h1>
      <Feed />
    </div>
  );
};

export default FeedList;
