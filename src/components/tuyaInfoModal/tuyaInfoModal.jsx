import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as MUI from '@mui/material/';
import {getToken} from '../../redux/tuya_auth/tuyaOperation.js'
// import { addRabbit, fetchRabbits } from '../../redux/rabbits/rabbitsOperation';
import TuyaCss from '../tuyaInfo/tuyaInfo.module.css';

const baseUrl= 'https://openapi.tuyaeu.com';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TuyaInfoModal({ openModal, closeModal }) {
  const [clientId, setClientId] = useState('');
  const [secret, setSecret] = useState('');
  const [btn_check, setBtn_check] = useState(true);

  const dispatch = useDispatch();

  const tuyaConfig = {
    clientId,
    secret,
    baseUrl,
  };
 

  const handleChange = event => {
    switch (event.target.id) {
      
      case 'clientId':
        setClientId(event.target.value);
        localStorage.setItem('clientId', event.target.value);
        break;
      default:
        break;
    }
  };

  const handleChangeSecret = event => {
    setSecret(event.target.value);
    localStorage.setItem('secret', event.target.value);
  };

  useEffect(() => {
    if ((secret !== '') & (clientId !== '')) {
      setBtn_check(false);
    } else setBtn_check(true);
  }, [btn_check, secret, clientId]);


  // const onSubmit = e => {
  //   e.preventDefault();
  //   console.log("tuyaConfig",tuyaConfig)
  //   dispatch(getToken(tuyaConfig))
  //   // .then(el => (
  //   //   console.log("el", el)
  //     // el.payload === 201 ? closeModal() : ''
  //   // ))
  //     // .then((el) => console.log(el));
  // };

  const onSubmit = e => {
    e.preventDefault();

    if (!tuyaConfig || !tuyaConfig.clientId) {
      console.warn('tuyaConfig is missing required fields');
      return;
    }
    dispatch(getToken(tuyaConfig))
      .then(el => {
          localStorage.setItem('accessToken', el.payload.data.accessToken);
          localStorage.setItem("refreshToken",el.payload.data.refreshToken);
          closeModal();
        }
      )
      .catch(err => {
        console.error('Token fetch error', err);
      });
  };


  return (
    <div>
      <MUI.Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="Config on tuya"
        aria-describedby="Тут всі дані для Tuya, SmartLife"
      >
        <MUI.Box sx={style}>
          <form onSubmit={onSubmit} className={TuyaCss.Modal}>
            <div>
              <MUI.TextField
                // helperText="Please enter Client ID"
                id="clientId"
                label="clientId"
                onChange={handleChange}
                margin="normal"
              />
              <MUI.TextField
                // helperText="Please enter Client Secret"
                id="clientSecret"
                label="clientSecret"
                onChange={handleChangeSecret}
                margin="dense"
              />
            </div>
            <div className={TuyaCss.BtnModal}>
              <MUI.Button
                type="submit"
                disabled={btn_check}
                variant="outlined"
              >
                Save
              </MUI.Button>
              <MUI.Button
                variant="outlined"
                onClick={closeModal}

              >
                Cancel
              </MUI.Button>
            </div>
          </form>
        </MUI.Box>
      </MUI.Modal>
    </div>
  );
}
