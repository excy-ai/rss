import React from 'react';
import { NavLink } from 'react-router-dom';

import 'components/header/Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className={'header'}>
        <nav className={'nav-menu'}>
          <ul className={'nav-list'}>
            <li className={'nav-list_item'}>
              <NavLink to={'/'}>Main</NavLink>
            </li>
            <li className={'nav-list_item'}>
              <NavLink to={'/about'}>About Us</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
