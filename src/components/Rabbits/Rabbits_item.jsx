import React from 'react';
// import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/rabbits/rabbitsOperation';
import RabbitsCss from '../Rabbits/Rabbits.module.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Stack from '@mui/material/Stack';

export const RabbitsItem = ({
  id,
  gender,
  name,
  breed,
  photoRabbit,
  dateBirthDay,
  cage,
  Mother,
  Father,
  favorite,
}) => {
  const dispatch = useDispatch();
  // const edit = e => {
  //   e.preventDefault();
  //   console.dir(e.target.parentElement.id);
  //   console.dir(e.target.parentElement);
  // };

  console.log(
    id,
    gender,
    name,
    breed,
    photoRabbit,
    dateBirthDay,
    cage,
    Mother,
    Father,
    favorite
  );

  return (
    <li id={id} key={id} className={RabbitsCss.contact_item}>
      <p>{<ContactPhoneIcon color="pink" />}</p>
      {name} {gender} {breed} {dateBirthDay} {photoRabbit} {cage} {Mother}
      {Father} {`${favorite}`}
      <b></b>
      {/* <button type="text" className={ContactCss.btn} onClick={edit}>
        Edit
      </button> */}
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          type="text"
          className={RabbitsCss.btn}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </Button>
      </Stack>
    </li>
  );
};
