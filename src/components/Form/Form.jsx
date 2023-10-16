import FormCss from '../Form/Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/rabbits/rabbitsOperation';
import { getRabbits } from '../../redux/rabbits/rabbitsSelector';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

let newUser = [];

export const RabbitForm = () => {
  const { items } = useSelector(getRabbits);
  const dispatch = useDispatch();

  const addingContacts = e => {
    e.preventDefault();
    let name = e.target.name.value;
    let number = e.target.phone.value;
    if (items.find(contact => contact.name === name)) {
      alert(`${name} is already existing`);
      e.target.name.value = '';
    } else {
      newUser = {
        name,
        number,
      };
      dispatch(addContact(newUser));
      e.target.name.value = e.target.phone.value = '';
    }
  };

  return (
    <form onSubmit={addingContacts} className={FormCss.form}>
      <div className={FormCss.input__contacts}>
        <p>
          <AccountCircleIcon fontSize="small" /> Name
        </p>
        <TextField
          id="helper-name"
          label="Name"
          name="name"
          className={FormCss.item_input}
        />
        <p>
          <LocalPhoneIcon fontSize="small" /> Phone
        </p>
        <TextField
          id="helper-phone"
          label="Phone"
          name="phone"
          className={FormCss.item_input}
        />
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          type="submit"
          className={FormCss.input__btn}
        >
          Add contact
        </Button>
      </div>
    </form>
  );
};
