import AppCss from '../components/App.module.css';
import { RabbitForm } from '../components/AddRabbit/AddRabbit';
// import { Filter } from '../components/Filter/Filter';

const AddRabbit = () => {
  return (
    //Щось гітхаб не прийняв зміни при перейменуванні файлу
    <>
      <div className={AppCss.component}>
        <h1>Add Rabbits</h1>
        <RabbitForm />
      </div>
    </>
  );
};

export default AddRabbit;
