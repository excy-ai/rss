import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import routes from 'router/routes';

import 'components/header/Header.scss';

const Header: FC = () => (
  <header className={'header'}>
    <nav className={'nav-menu'}>
      <ul className={'nav-list'}>
        <li className={'nav-list_item'}>
          <NavLink to={routes.main}>Main</NavLink>
        </li>
        <li className={'nav-list_item'}>
          <NavLink to={routes.aboutUs}>About Us</NavLink>
        </li>
        <li className={'nav-list_item'}>
          <NavLink to={routes.form}>Form</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
