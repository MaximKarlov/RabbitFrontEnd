import { useSelector, useDispatch } from 'react-redux';
import { Loader } from '../Loader/Loader';
import { useEffect, useState } from 'react';
import RabbitBreedItems from '../RabbitBreed/RabbitBreedItems';
import { fetchRabbitsBreed } from '../../redux/rabbits/rabbitsOperation';
import Modal from 'react-modal';
import { TextField } from '@mui/material';
import {
  getRabbitsBreed,
  getIsLoading,
} from '../../redux/rabbits/rabbitsSelector';
import RBCSS from './RabbitBreed.module.css';

export const RabbitBreedList = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
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

          <form className={RBCSS.modalInputs}>
            <TextField
              id="nameBreed"
              label="Name Breed"
              variant="outlined"
              sx={{
                fontSize: 16,
                fontWeight: 900,
              }}
            />
            <TextField id="ColorBreed" label="Color Breed" variant="outlined" />
            <TextField id="AboutBreed" label="About Breed" multiline />
            <div className={RBCSS.modalButtons}>
              <button onClick={closeModal}>Add</button>
              <button onClick={closeModal}>Close</button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};
