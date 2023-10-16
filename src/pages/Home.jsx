// import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import CSS from '../pages/Home.module.css';

const Home = () => {
  const location = useLocation();
  return (
    <div className={CSS.bodyItem}>
      <h2>Творіння Макса Карлова)))</h2>
      <p>
        Для роботи з контактами потрібно
        <Link to="/register" state={{ from: location }} className={CSS.linked}>
          <span> зареєструватися </span>
        </Link>
        або
        <NavLink to="/login" className={CSS.linked}>
          <span> увійти </span>.
        </NavLink>
        в систему
      </p>
    </div>
  );
};

export default Home;
