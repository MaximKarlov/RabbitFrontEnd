import { useSelector, useDispatch } from 'react-redux';
import { Loader } from '../Loader/Loader';
import { useEffect, useState } from 'react';
import RabbitBreedItems from '../RabbitBreed/RabbitBreedItems';
import {
  fetchRabbitsBreed,
  addRabbitBreed,
} from '../../redux/rabbits/rabbitsOperation';
import Modal from 'react-modal';
import { TextField } from '@mui/material';
import {
  getRabbitsBreed,
  getIsLoading,
} from '../../redux/rabbits/rabbitsSelector';
import RBCSS from './RabbitBreed.module.css';

export const RabbitBreedList = () => {
  const [nameBreed, setNameBreed] = useState('');
  const [colorBreed, setColorBreed] = useState('');
  const [aboutBreed, setAboutBreed] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const objectsToSend = {
    name: nameBreed,
    color: colorBreed,
    about: aboutBreed,
  };

  const dispatch = useDispatch();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  // Modal.setAppElement('addBreedRabbit');
  Modal.setAppElement('#root');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // Отримуємо частини стану
  const breed = useSelector(getRabbitsBreed);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchRabbitsBreed());
  }, [dispatch]);

  const handleChangeName = event => {
    setNameBreed(event.target.value);
  };
  const handleChangeColor = event => {
    setColorBreed(event.target.value);
  };

  const handleChangeAbout = event => {
    setAboutBreed(event.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    dispatch(addRabbitBreed(objectsToSend))
      .then(el => (el.payload === 201 ? setIsOpen(false) : setIsOpen(true)))
      .then(() => dispatch(fetchRabbitsBreed()));
  };

  return (
    <div>
      <div>
        {isLoading ? <Loader /> : <RabbitBreedItems BreedList={breed} />}
      </div>
      <div>
        <button onClick={openModal}>ADD Breed</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className={RBCSS.modalTitle}>Add Breed Rabbit</h2>

          <form className={RBCSS.modalInputs} onSubmit={onSubmit}>
            <TextField
              id="nameBreed"
              label="Name Breed"
              variant="outlined"
              inputProps={{ style: { fontSize: 22 } }}
              InputLabelProps={{ style: { fontSize: 16 } }}
              onChange={handleChangeName}
            />
            <TextField
              id="ColorBreed"
              label="Color Breed"
              variant="outlined"
              inputProps={{ style: { fontSize: 22 } }}
              InputLabelProps={{ style: { fontSize: 16 } }}
              onChange={handleChangeColor}
            />
            <TextField
              id="AboutBreed"
              label="About Breed"
              multiline
              inputProps={{ style: { fontSize: 22 } }}
              InputLabelProps={{ style: { fontSize: 16 } }}
              onChange={handleChangeAbout}
            />
            <div className={RBCSS.modalButtons}>
              <button type="submit">Add</button>
              <button onClick={closeModal}>Close</button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};
