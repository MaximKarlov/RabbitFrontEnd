import { Suspense, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../redux/auth/authOperation';
import { authSelectors } from '../redux/auth/authSelector';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import defaultAvatar from '../img/default-avatar.png';
import headerLogo from '../img/logo.png';
import homeIcon from '../img/home.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import CSS from './Layout.module.css';

export const Layout = () => {
  const avatar = defaultAvatar;
  const logo = headerLogo;
  const home = homeIcon;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const userLogged = useSelector(authSelectors.getUserName);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ul className={CSS.layout_items}>
        <li className={CSS.layout_item}>
          <NavLink to="/" className={CSS.linked}>
            <img src={home} alt="Home" className={CSS.homeBtn} />
          </NavLink>
        </li>
        <li className={CSS.layout_item}>
          <NavLink to="/rabbits">
            <img src={logo} alt="logo" className={CSS.headerLogo} />
          </NavLink>
        </li>
        {isLoggedIn ? (
          <li className={CSS.layout_item}>
            <div className={CSS.userInfo}>
              <div>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? 'account-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                    >
                      <Chip
                        avatar={<Avatar alt={userLogged} src={avatar} />}
                        label={userLogged}
                        variant="outlined"
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleClose}>
                    <Avatar alt={userLogged} src={avatar} />
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Avatar alt={userLogged} src={avatar} /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={() => dispatch(logOutUser())}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </li>
        ) : (
          <ul className={CSS.regLogItems}>
            <li className={CSS.regLogItem}>
              <NavLink to="/register" className={CSS.linked}>
                Register
              </NavLink>
            </li>
            <li className={CSS.regLogItem}>
              <NavLink to="/login" className={CSS.linked}>
                LogIn
              </NavLink>
            </li>
          </ul>
        )}
      </ul>

      <Suspense fallback={<div>"LOADING..."</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
