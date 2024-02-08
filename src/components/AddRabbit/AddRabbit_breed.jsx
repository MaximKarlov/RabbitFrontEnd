import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as MUI from '@mui/material';
import { getRabbitsBreed } from '../../redux/rabbits/rabbitsSelector';
// import { fetchRabbitsBreed } from '../../redux/rabbits/rabbitsOperation';

function sleep(duration) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export const AddRabbit_breed = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const dispatch = useDispatch();
  // dispatch(fetchRabbitsBreed());

  // Отримуємо частини стану
  const breed = useSelector(getRabbitsBreed);
  // const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...breed]);
        console.log(options);
      }
    })();

    return () => {
      active = false;
    };
  }, [breed, dispatch, loading, options]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <MUI.Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={option => option.name}
      options={options}
      loading={loading}
      renderInput={params => (
        <MUI.TextField
          {...params}
          label="Breed"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <MUI.CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
