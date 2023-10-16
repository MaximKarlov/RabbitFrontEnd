import AppCss from '../components/App.module.css';
import { RabbitBreedList } from '../components/RabbitBreed/RabbitBreed';
// import { Filter } from '../components/Filter/Filter';

const RabbitBreed = () => {
  return (
    //Щось гітхаб не прийняв зміни при перейменуванні файлу
    <>
      <div className={AppCss.component}>
        <h1>Rabbits breeds</h1>
        <RabbitBreedList />
      </div>
    </>
  );
};

export default RabbitBreed;
