import * as MUI from '@mui/material';
import { NavLink } from 'react-router-dom';
import CSS from '../components/btnMenu/btnMenu.module.css';

export default function VerificationSuccess() {

      const closeClick = () => {
         window.close()
      };


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Ваш акаунт активовано</h2>
      <p>Дякуємо за підтвердження реєстрації!</p>
      <div className={CSS.btn}>
        <NavLink to="/rabbits">
          <MUI.Button variant="outlined">{`<-`} Back</MUI.Button>
        </NavLink>
        <MUI.Button variant="outlined" onClick={closeClick}>
          Закрити вкладку
        </MUI.Button>
      </div>
    </div>
  );
}
