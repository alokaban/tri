import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Главная</Link></li>
        <li><Link to="/register">Регистрация</Link></li>
        <li><Link to="/dashboard">Личный кабинет</Link></li>
        <li><Link to="/withdraw">Вывод средств</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
