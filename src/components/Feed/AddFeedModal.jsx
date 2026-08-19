import * as React from 'react';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled } from '@mui/system';
import Modal from '@mui/material/Modal';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import RBCSS from './feed.module.css';
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

const ModalWindows = styled(Modal)`
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
  const [dateFeed, setDateFeed] = useState(dayjs());
  const [nameFeed, setNameFeed] = useState('');
  const [priceFeed, setPriceFeed] = useState('');
  const [quantityFeed, setQuantityFeed] = useState('');
  const [quantityBags, setQuantityBags] = useState('');
  const [FeedSuma, setFeedSuma] = useState('');
  const [btnCheck, setBtnCheck] = useState(false);

  const objectsToSend = {
    date: dateFeed,
    name: nameFeed,
    price: priceFeed,
    quantity: quantityFeed,
    bags:quantityBags,
    suma:FeedSuma,
  };
  const dispatch = useDispatch();

  const handleChange = event => {
    switch (event.target.id) {
      case 'nameFeed':
        setNameFeed(event.target.value);
        break;

      case 'priceFeed':
        setPriceFeed(event.target.value);
        // if (quantityFeed !== '') {
        //   setFeedSuma(event.target.value * quantityFeed);
        // }
        break;

      case 'quantityFeed':
        setQuantityFeed(event.target.value);
          if (FeedSuma!=='') {
            const tmp = (Number(FeedSuma) / Number(event.target.value)).toFixed(2)
           setPriceFeed(tmp.toString());
          }
          // if(priceFeed!=='')
          // {
          //   setFeedSuma(Math.round(priceFeed * event.target.value).toString());
          // }
      break;

      case 'quantityBags':
        setQuantityBags(event.target.value);
        break;

      case 'FeedSuma':
        // console.log('feedsumma', event.target.value);
        setFeedSuma(event.target.value);
        // console.log('quantityFeed', quantityFeed);

            if(quantityFeed!==''){
                const tmp = event.target.value / quantityFeed;
                setPriceFeed(tmp.toString());
            }

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
    if ((nameFeed !== '') & (priceFeed !== '') & (quantityFeed !== '')) {
      setBtnCheck(false);
    } else setBtnCheck(true);
    if (edit) {
      dispatch(findCurrentFeedById(id)).then(el => {
        const rawDate = el.payload.date;
        setDateFeed(dayjs(rawDate)); 
        setNameFeed(el.payload.name);
        setPriceFeed(el.payload.price);
        setQuantityFeed(el.payload.quantity);
        setQuantityBags(el.payload.bags);
        setFeedSuma(el.payload.suma);
      });
    }
  }, [dispatch, edit, id, nameFeed, priceFeed, quantityFeed]);

  return (
    <div>
      <ModalWindows
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={close}
        slots={{ backdrop: StyledBackdrop }}
      >
        <div className={RBCSS.modal}>
          <h2 className={RBCSS.modalTitle}>Додавання корму</h2>
          <form className={RBCSS.modalInputs}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  id="date"
                  label="Дата"
                  format="DD.MM.YYYY"
                  value={dateFeed}
                  onChange={newValue => setDateFeed(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
            <MUI.TextField
              id="nameFeed"
              label="Назва корму"
              value={nameFeed}
              variant="outlined"
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              onChange={handleChange}
            />
            <MUI.TextField
              id="priceFeed"
              label="Ціна корму за кг"
              value={priceFeed}
              variant="outlined"
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              onChange={handleChange}
            />
            <MUI.TextField
              id="quantityFeed"
              label="Кількість корму"
              value={quantityFeed}
              multiline
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              onChange={handleChange}
            />
            <MUI.TextField
              id="quantityBags"
              label="Кількість мішків"
              value={quantityBags}
              multiline
              inputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              onChange={handleChange}
            />
            <MUI.TextField
              // disabled
              id="FeedSuma"
              label="Сума"
              defaultValue="0"
              value={FeedSuma}
              onChange={handleChange}
            />
            {/* <MUI.TextField
              id="FeedSuma"
              label="Сума"
              value={FeedSuma}
              variant="outlined-read-only-input"
              //   slotProps={{
              // input: {
              //   readOnly: true,
              // },}}
              // onChange={handleChange}
            /> */}
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
      </ModalWindows>
    </div>
  );
}
