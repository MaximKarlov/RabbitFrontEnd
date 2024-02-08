// import FormCss from '../Form/Form.module.css';
import { NavLink } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// import { useSelector, useDispatch } from 'react-redux';

export const ButtonMenu = () => {
  // const location = useLocation();
  return (
    <>
      <Stack direction="row" spacing={2}></Stack>
      <NavLink to="/rabbits/addRabbit" className={CSS.linked}>
        <Button
          variant="outlined"
          startIcon={<AddOutlinedIcon />}
          type="text"
          // className={ContactCss.btn}
          // onClick={() => dispatch(deleteContact(id))}
        >
          ADD Rabbit
        </Button>
      </NavLink>
      <NavLink to="/rabbits/breedList" className={CSS.linked}>
        <Button
          variant="outlined"
          startIcon={<AddOutlinedIcon />}
          type="text"
          // className={ContactCss.btn}
          // onClick={() => dispatch(deleteContact(id))}
        >
          ADD Breed
        </Button>
      </NavLink>
      {/* <NavLink to="/rabbits/add" className={CSS.linked}>
        <button type="button">ADD Rabbit page</button>
      </NavLink>
      <NavLink to="/rabbits/add" className={CSS.linked}>
        <button type="button">ADD Rabbit page</button>
      </NavLink> */}

      {/* <button type="button">Breed page</button> */}
      <button>Edit</button>
    </>
  );
};
