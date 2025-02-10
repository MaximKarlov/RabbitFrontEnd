import AppCss from '../components/App.module.css';
import { RabbitBreedList } from '../components/RabbitBreed/RabbitBreed';
// import { Filter } from '../components/Filter/Filter';

const RabbitBreed = () => {
  return (
    <div className={AppCss.component}>
      <h1>Rabbits breeds</h1>
      <RabbitBreedList />
    </div>
  );
};

export default RabbitBreed;
