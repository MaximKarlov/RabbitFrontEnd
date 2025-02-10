import * as MUI from '@mui/material';

export const RabbitGender = ({ gender, onChangeGender }) => {
  return (
    <MUI.FormControl fullWidth>
      <MUI.InputLabel id="Gender">Gender</MUI.InputLabel>
      <MUI.Select
        labelId="Gender"
        id="Gender"
        value={gender}
        label="Gender"
        onChange={onChangeGender}
      >
        <MUI.MenuItem value="Самець">Самець</MUI.MenuItem>
        <MUI.MenuItem value="Самка">Самка</MUI.MenuItem>
      </MUI.Select>
    </MUI.FormControl>
  );
};
