// import FormCss from '../Form/Form.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as MUI from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddRabbitModal from '../AddRabbitModal/AddRabbitModal';

export const ButtonMenu = () => {
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
      <div>
        <MUI.Button
          variant="outlined"
          startIcon={<AddOutlinedIcon />}
          type="text"
          // className={ContactCss.btn}
          onClick={openModal}
        >
          ADD Rabbit
        </MUI.Button>
        <NavLink to="/rabbits/breedList" className={CSS.linked}>
          <MUI.Button
            variant="outlined"
            startIcon={<AddOutlinedIcon />}
            type="text"
            // className={ContactCss.btn}\
            // onClick={() => dispatch(deleteContact(id))}
          >
            Breed
          </MUI.Button>
        </NavLink>
        {open ? (
          <AddRabbitModal openModal={open} closeModal={closeModal} />
        ) : (
          ''
        )}
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
