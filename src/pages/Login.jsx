import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CSS from '../pages/Home.module.css';
import { logInUser } from '../redux/auth/authOperation';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
      default: {
        return value;
      }
    }
  };
  // const location = useLocation();

  const loggInUser = e => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={loggInUser}>
      <div className={CSS.registration}>
        <div className={CSS.items}>
          <h2>Вхід</h2>
          <div className={CSS.items_input}>
            <TextField
              onChange={handleChange}
              id="demo-helper-text-aligned"
              label="Email"
              name="email"
              className={CSS.item_input}
            />
            <FormControl variant="outlined" className={CSS.item_input}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <Button variant="outlined" startIcon={<LoginIcon />} className={CSS.home_btn} type="submit">
            Вхід
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Login;
