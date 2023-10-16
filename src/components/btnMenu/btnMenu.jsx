// import FormCss from '../Form/Form.module.css';
import { NavLink } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

export const ButtonMenu = () => {
  // const location = useLocation();
  return (
    <>
      <NavLink to="/rabbits/addRabbit" className={CSS.linked}>
        <button type="button">ADD Rabbit page</button>
      </NavLink>
      <NavLink to="/rabbits/breedList" className={CSS.linked}>
        <button type="button">Breed page</button>
      </NavLink>
      {/* <NavLink to="/rabbits/add" className={CSS.linked}>
        <button type="button">ADD Rabbit page</button>
      </NavLink>
      <NavLink to="/rabbits/add" className={CSS.linked}>
        <button type="button">ADD Rabbit page</button>
      </NavLink> */}

      {/* <button type="button">Breed page</button> */}
      <button>Edit</button>
      <button>Delete</button>
    </>
  );
};
