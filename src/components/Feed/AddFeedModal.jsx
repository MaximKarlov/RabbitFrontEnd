import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import RBCSS from '../RabbitBreedModal/RabbitBreedModal.module.css';
import * as MUI from '@mui/material';
import {
  addFeed,
  fetchFeeds,
  findCurrentFeedById,
  updateFeed,
} from '../../redux/feed/feedOperation';

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

export function AddFeedModal({ open, close, edit, id }) {
  const [dateFeed, setDateFeed] = useState('');
  const [nameFeed, setNameFeed] = useState('');
  const [priceFeed, setPriceFeed] = useState('');
  const [quantityFeed, setQuantityFeed] = useState('');
  const [btnCheck, setBtnCheck] = useState(false);

  const objectsToSend = {
    date: dateFeed,
    name: nameFeed,
    price: priceFeed,
    quantity: quantityFeed,
  };
  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.id) {
      case 'date':
        setDateFeed(event.target.value);
        // console.log('nameBreed', nameBreed);
        break;
      case 'nameFeed':
        setNameFeed(event.target.value);
        // console.log('nameBreed', nameBreed);
        break;
      case 'priceFeed':
        setPriceFeed(event.target.value);
        // console.log('colorBreed', colorBreed);

        break;
      case 'quantityFeed':
        setQuantityFeed(event.target.value);
        // console.log('aboutBreed', aboutBreed);

        break;
      default:
        break;
    }
  };

  const handleUpdate = e => {
    e.preventDefault();
    if (edit === true) {
      dispatch(updateFeed([id, objectsToSend]))
        .then(el => (el.payload === 201 ? close() : ''))
        .then(() => dispatch(fetchFeeds()));
    }
    if (edit === false) {
      if (objectsToSend.about === '') {
        objectsToSend.about = '-';
      }
      dispatch(addFeed(objectsToSend))
        .then(el => (el.payload === 201 ? close() : ''))
        .then(() => dispatch(fetchFeeds()));
    }
  };

  useEffect(() => {
    if (edit) {
      dispatch(findCurrentFeedById(id)).then(el => {
        setDateFeed(el.payload.date);
        setNameFeed(el.payload.name);
        setPriceFeed(el.payload.price);
        setQuantityFeed(el.payload.quantity);

      });
    }
  }, [dispatch, edit, id]);

  useEffect(() => {
    if ((nameFeed !== '') & (priceFeed !== '') & (quantityFeed !== '')) {
      setBtnCheck(false);
    } else setBtnCheck(true);
  }, [priceFeed, nameFeed, quantityFeed]);

  return (
    <div>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={close}
        slots={{ backdrop: StyledBackdrop }}
      >
        <div className={RBCSS.modal}>
          <h2 className={RBCSS.modalTitle}>Add Feeds</h2>
          <form className={RBCSS.modalInputs}>
            <MUI.TextField
              id="date"
              label="date"
              value={dateFeed}
              variant="outlined"
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              onChange={handleChange}
            />
            <MUI.TextField
              id="nameFeed"
              label="Name Feed"
              value={nameFeed}
              variant="outlined"
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              onChange={handleChange}
            />
            <MUI.TextField
              id="priceFeed"
              label="Price Feed"
              value={priceFeed}
              variant="outlined"
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              onChange={handleChange}
            />
            <MUI.TextField
              id="quantityFeed"
              label="Quantity Feed"
              value={quantityFeed}
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
