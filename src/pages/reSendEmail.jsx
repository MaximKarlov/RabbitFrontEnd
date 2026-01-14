import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import * as MUI from '@mui/material';
import CSS from '../components/btnMenu/btnMenu.module.css';
import { reSend } from '../redux/auth/authOperation';

const ReSendEmail = ({data}) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { emailToResend } = location.state || {};

  const onClick = () => {
    dispatch(reSend(emailToResend));
  };

  const closeClick = () => {
    window.close();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Ваш акаунт не активовано</h2>
      <p>Для подальших дій із застосунком потрібно верифікувати пошту!</p>
      <p>
        Якщо пошта не прийшла
        <Button variant="text" className={CSS.home_btn} onClick={onClick}>
          НАТИСНІТЬ СЮДИ
        </Button>
      </p>

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
};

export default ReSendEmail;
