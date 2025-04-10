// import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logoIn from '../img/logo_in.png';
import CSS from '../pages/Home.module.css';

const Home = () => {
  const location = useLocation();
  const logo_in = logoIn;
  return (
    <div className={CSS.bodyItem}>
      <img src={logo_in} alt="LogoIn" className={CSS.logoIn} />
      <h2>Застосунок для обліку кроликів</h2>
      <p>
        Для роботи потрібно
        <Link to="/register" state={{ from: location }} className={CSS.linked}>
          <span> зареєструватися </span>
        </Link>
        або
        <NavLink to="/login" className={CSS.linked}>
          <span> увійти </span>
        </NavLink>
        в систему
      </p>
    </div>
  );
};

export default Home;
