import { useEffect, useState } from 'react';
import * as MUI from '@mui/material';
import { AddRabbit_breed } from './AddRabbit_breed';

export const RabbitForm = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [btn_check, setBtn_check] = useState(true);

  const handleChange = event => {
    setGender(event.target.value);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  useEffect(() => {
    if ((gender !== '') & (name !== '')) {
      setBtn_check(false);
    } else setBtn_check(true);
  }, [btn_check, gender, name]);

  return (
    <div>
      <div>
        <label>
          Rabbit name
          <MUI.Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& > :not(style)': { m: 1 },
            }}
          >
            <MUI.TextField
              helperText="Please enter name rabbit"
              id="demo-helper-text-misaligned"
              label="Name"
              onChange={handleNameChange}
            />
          </MUI.Box>
        </label>
        <label>{<AddRabbit_breed />}</label>
        <label>
          Gender
          <div>
            <MUI.FormControl sx={{ m: 1, minWidth: 150 }}>
              <MUI.InputLabel id="demo-simple-select-autowidth-label">
                Gender
              </MUI.InputLabel>
              <MUI.Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={gender}
                onChange={handleChange}
                autoWidth
                label="Gender"
              >
                {/* <MUI.MenuItem value="">
                  <em>None</em>
                </MUI.MenuItem> */}
                <MUI.MenuItem value={'Самець'}>Самець</MUI.MenuItem>
                <MUI.MenuItem value={'Самка'}>Самка</MUI.MenuItem>
              </MUI.Select>
            </MUI.FormControl>
          </div>
        </label>
        <label>
          Birthday <input type="text" />
        </label>
      </div>
      <MUI.Button disabled={btn_check} variant="outlined">
        Add
      </MUI.Button>
      <MUI.Button variant="outlined">Cancel</MUI.Button>
    </div>
  );
};
