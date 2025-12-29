import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as MUI from '@mui/material';
import tuyaCss from './tuyaInfo.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import TuyaInfoModal from '../tuyaInfoModal/tuyaInfoModal';


export const TuyaInfo = () => {
  // const location = useLocation();

  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={tuyaCss.TuyaInfo}>
        <MUI.Button
          startIcon={<SettingsIcon />}
          type="text"
          onClick={openModal}
        ></MUI.Button>
        <NavLink to="/" className={CSS.linked}>
          <MUI.Button
            variant="outlined"
            startIcon={<AddOutlinedIcon />}
            type="text"
            // className={ContactCss.btn}\
            // onClick={() => dispatch(deleteContact(id))}
          >
            info 2
          </MUI.Button>
        </NavLink>

        {open ? <TuyaInfoModal openModal={open} closeModal={closeModal} /> : ''}
      </div>
      {/* 
      <MUI.Stack direction="row" spacing={2}></MUI.Stack>

      </NavLink>

      <NavLink to="/rabbits/add" className={CSS.linked}>
        <button type="button">ADD Rabbit page</button>
      </NavLink>
      <NavLink to="/rabbits/add" className={CSS.linked}>
        <button type="button">ADD Rabbit page</button>
      </NavLink>

      {<button type="button">Breed page</button>}
      <button>Edit</button> */}
    </>
  );
};
