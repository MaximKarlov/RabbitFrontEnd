import AppCss from '../components/App.module.css';
import { RabbitForm } from '../components/Form/Form';
import { Filter } from '../components/Filter/Filter';
import { RabbitList } from '../components/Rabbits/Rabbits';
import { ButtonMenu } from '../components/btnMenu/btnMenu';

export default function Main() {
  return (
    <>
      //Щось гітхаб не прийняв зміни при перейменуванні файлу
      <div className={AppCss.component}>
        <h1>Rabbits</h1>
        <RabbitForm />
        <h2>Contacts</h2>
        <Filter />
        <RabbitList />
      </div>
      <div>
        <ButtonMenu />
      </div>
    </>
  );
}
