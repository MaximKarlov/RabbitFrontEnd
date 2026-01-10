import feedCss from '../components/Feed/feed.module.css';
import { Feed } from '../components/Feed/Feed';
import feedImg from '../img/koncentrirovannyekorma-1-min.webp'


const FeedList = () => {
  return (
    <div className={feedCss.component}>
      <div className={feedCss.first}>
        <h1>Feeds List</h1>
        <img src={feedImg} alt="korm" />
      </div>
      <Feed />
    </div>
  );
};

export default FeedList;
