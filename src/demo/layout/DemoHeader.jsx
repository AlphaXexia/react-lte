import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {
  faExpandArrowsAlt, faThLarge,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LteMessageNavMenu from '../../components/navbar/LteMessageNavMenu';
import { messageNavData, notifNavData } from '../data/header';
import LteNotifNavMenu from '../../components/navbar/LteNotifNavMenu';
import LteMainHeader from '../../components/navbar/LteMainHeader';
import LteNavSearch from '../../components/navbar/LteNavSearch';
import LteToggler from '../../components/navbar/LteToggler';

export default function DemoHeader() {
  return (
    <LteMainHeader>
      <LteToggler>
        <NavItem className="d-none d-sm-inline-block">
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem className="d-none d-sm-inline-block">
          <NavLink href="/">Contact</NavLink>
        </NavItem>
      </LteToggler>

      <LteNavSearch />

      <Nav navbar className="ml-auto">
        <LteMessageNavMenu data={messageNavData} />
        <LteNotifNavMenu data={notifNavData} />
        <NavItem>
          <NavLink tag="button" className="btn" data-widget="fullscreen">
            <FontAwesomeIcon icon={faExpandArrowsAlt} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag="button" className="btn" data-widget="control-sidebar" data-slide="true">
            <FontAwesomeIcon icon={faThLarge} />
          </NavLink>
        </NavItem>
      </Nav>
    </LteMainHeader>
  );
}
