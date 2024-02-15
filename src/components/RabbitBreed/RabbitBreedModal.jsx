import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import RBCSS from './RabbitBreed.module.css';
import * as MUI from '@mui/material';
import {
  addRabbitBreed,
  fetchRabbitsBreed,
  findCurrentBreedById,
  updateRabbitsBreed,
} from '../../redux/rabbits/rabbitsOperation';

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'base-Backdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export function RabbitBreedModal({ open, close, edit, id }) {
  const [nameBreed, setNameBreed] = useState('');
  const [colorBreed, setColorBreed] = useState('');
  const [aboutBreed, setAboutBreed] = useState('');
  const [btnCheck, setBtnCheck] = useState(false);

  const objectsToSend = {
    name: nameBreed,
    color: colorBreed,
    about: aboutBreed,
  };
  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.id) {
      case 'nameBreed':
        setNameBreed(event.target.value);
        // console.log('nameBreed', nameBreed);
        break;
      case 'colorBreed':
        setColorBreed(event.target.value);
        // console.log('colorBreed', colorBreed);

        break;
      case 'aboutBreed':
        setAboutBreed(event.target.value);
        // console.log('aboutBreed', aboutBreed);

        break;
      default:
        break;
    }
  };

  const handleUpdate = e => {
    e.preventDefault();
    console.log('edit', edit);
    if (edit === true) {
      dispatch(updateRabbitsBreed([id, objectsToSend]))
        .then(el => (el.payload === 201 ? close() : ''))
        .then(() => dispatch(fetchRabbitsBreed()));
    }
    if (edit === false) {
      if (objectsToSend.about === '') {
        objectsToSend.about = '-';
        dispatch(addRabbitBreed(objectsToSend))
          .then(el => (el.payload === 201 ? close() : ''))
          .then(() => dispatch(fetchRabbitsBreed()));
      }
    }
  };

  useEffect(() => {
    if (edit) {
      dispatch(findCurrentBreedById(id)).then(el => {
        setNameBreed(el.payload.name);
        setColorBreed(el.payload.color);
        setAboutBreed(el.payload.about);
      });
    }
  }, [dispatch, edit, id]);

  useEffect(() => {
    if ((nameBreed !== '') & (colorBreed !== '')) {
      setBtnCheck(false);
    } else setBtnCheck(true);
  }, [colorBreed, nameBreed]);

  return (
    <div>
      {/* {edit ? getBreedById() : ''} */}
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={close}
        slots={{ backdrop: StyledBackdrop }}
      >
        <div className={RBCSS.modal}>
          <h2 className={RBCSS.modalTitle}>Add Breed Rabbit</h2>
          <form
            className={RBCSS.modalInputs}
            // onSubmit={onSubmit}
          >
            <MUI.TextField
              id="nameBreed"
              label="Name Breed"
              value={nameBreed}
              variant="outlined"
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              onChange={handleChange}
            />
            <MUI.TextField
              id="colorBreed"
              label="Color Breed"
              value={colorBreed}
              variant="outlined"
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              onChange={handleChange}
            />
            <MUI.TextField
              id="aboutBreed"
              label="About Breed"
              value={aboutBreed}
              multiline
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              onChange={handleChange}
            />
            <div className={RBCSS.modalButtons}>
              <MUI.Button
                variant="outlined"
                type="button"
                disabled={btnCheck}
                onClick={handleUpdate}
              >
                {edit ? 'update' : 'add'}
              </MUI.Button>

              <MUI.Button variant="outlined" onClick={close}>
                Close
              </MUI.Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
