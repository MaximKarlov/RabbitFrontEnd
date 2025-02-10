import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as MUI from '@mui/material/';
import { GetRabbitBreedList } from '../AddRabbit/GetRabbitBreedList';
import { RabbitGender } from '../AddRabbit/RabbitGender';
import { RabbitMother } from '../AddRabbit/RabbitMother';
import { RabbitFather } from '../AddRabbit/RabbitFather';
import { addRabbit, fetchRabbits } from '../../redux/rabbits/rabbitsOperation';

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

export default function AddRabbitModal({ openModal, closeModal }) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [breed, setBreed] = useState('');
  const [mother, setMother] = useState('');
  const [father, setFather] = useState('');
  // const [cage, setCage] = useState('');
  // const [age, setAge] = useState('');
  // const [dateBirth, setDateBirth] = useState('');
  const [btn_check, setBtn_check] = useState(true);

  const dispatch = useDispatch();

  const rabbitToSend = {
    name,
    breed,
    gender,
    mother,
    father,
    // cage,
    // age,
    // dateBirth,
  };

  const handleChange = event => {
    console.log(event);
    switch (event.target.id) {
      case 'Name':
        setName(event.target.value);
        console.log('name', name);
        break;
      default:
        break;
    }
  };

  const handleChangeBreed = event => {
    setBreed(event.target.value);
  };

  const handleChangeGender = event => {
    setGender(event.target.value);
  };

  const handleChangeMother = event => {
    setMother(event.target.value);
  };

  const handleChangeFather = event => {
    setFather(event.target.value);
  };

  useEffect(() => {
    if ((gender !== '') & (name !== '')) {
      setBtn_check(false);
    } else setBtn_check(true);
  }, [btn_check, gender, name]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addRabbit(rabbitToSend))
      .then(el => (el.payload === 201 ? closeModal() : ''))
      .then(() => dispatch(fetchRabbits()));
  };

  return (
    <div>
      <MUI.Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MUI.Box sx={style}>
          <form onSubmit={onSubmit}>
            <div>
              <MUI.TextField
                helperText="Please enter name rabbit"
                id="Name"
                label="Name"
                onChange={handleChange}
              />
              {
                <GetRabbitBreedList
                  breedSelect={breed}
                  onChangeBreed={handleChangeBreed}
                />
              }
              {
                <RabbitGender
                  gender={gender}
                  onChangeGender={handleChangeGender}
                />
              }
              {
                <RabbitMother
                  gender={mother}
                  onChangeMother={handleChangeMother}
                />
              }
              {
                <RabbitFather
                  gender={father}
                  onChangeFather={handleChangeFather}
                />
              }
            </div>
            <div>
              <MUI.Button type="submit" disabled={btn_check} variant="outlined">
                Add
              </MUI.Button>
              <MUI.Button variant="outlined" onClick={closeModal}>
                Cancel
              </MUI.Button>
            </div>
          </form>
        </MUI.Box>
      </MUI.Modal>
    </div>
  );
}
