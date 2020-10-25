import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import messageNavData from '../data/header';
import LteNavSearch from '../../components/navbar/LteNavSearch';
import LteToggler from '../../components/navbar/LteToggler';
import MessageMenu from '../components/MessageMenu';
import NotificationMenu from '../components/NotificationMenu';

export default function DemoHeader() {
  return (
    <Navbar className='main-header navbar-white navbar-light' expand>
      <Nav navbar>
        <LteToggler />
        <NavItem className='d-none d-sm-inline-block'>
          <NavLink tag={Link} to='/'>
            Home
          </NavLink>
        </NavItem>
        <NavItem className='d-none d-sm-inline-block'>
          <NavLink href='#'>Contact</NavLink>
        </NavItem>
      </Nav>

      <LteNavSearch />

      <Nav navbar className='ml-auto'>
        <MessageMenu data={messageNavData} />
        <NotificationMenu />
        <NavItem>
          <NavLink tag='button' className='btn' data-widget='control-sidebar' data-slide='true'>
            <FontAwesomeIcon icon={faThLarge} />
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
