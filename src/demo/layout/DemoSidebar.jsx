import React from 'react';
import { faAngleLeft, faChartPie, faCopy, faEdit, faTable, faTachometerAlt, faTh, faTree } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';
import { Badge, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LteMainSidebar from '../../components/sidebar/LteMainSidebar';
import LteNavSidebar from '../../components/sidebar/LteNavSidebar';
import LteSidebarUser from '../../components/sidebar/LteSidebarUser';
import { logo, user2 } from '../data/images';

export default function DemoSidebar() {
  return (
    <LteMainSidebar logo={logo} brandName='AdminLTE 3'>
      <LteSidebarUser avatar={user2} href='#' name='Alexander Pierce' />

      <LteNavSidebar>
        <NavItem>
          <NavLink tag={Link} to='/'>
            <FontAwesomeIcon icon={faTachometerAlt} className='nav-icon' />
            <p>Dashboard</p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to='#'>
            <FontAwesomeIcon icon={faTh} className='nav-icon' />
            <p>
              Widgets
              <Badge color='danger' className='right'>
                New
              </Badge>
            </p>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href='#'>
            <FontAwesomeIcon icon={faCopy} className='nav-icon' />
            <p>
              Layout Options
              <FontAwesomeIcon icon={faAngleLeft} className='right' />
              <Badge color='info' className='right'>
                6
              </Badge>
            </p>
          </NavLink>
          <ul className='nav nav-treeview'>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Top Navigation</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <small>Top Navigation + Sidebar</small>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Boxed</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Fixed Sidebar</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <small>Fixed Sidebar + Custom Area</small>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Fixed Navbar</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Fixed Footer</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Collapsed Sidebar</p>
              </NavLink>
            </NavItem>
          </ul>
        </NavItem>

        <NavItem>
          <NavLink href='#'>
            <FontAwesomeIcon icon={faChartPie} className='nav-icon' />
            <p>
              Charts
              <FontAwesomeIcon icon={faAngleLeft} className='right' />
            </p>
          </NavLink>
          <ul className='nav nav-treeview'>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>ChartJS</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Flot</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Inline</p>
              </NavLink>
            </NavItem>
          </ul>
        </NavItem>

        <NavItem>
          <NavLink href='#'>
            <FontAwesomeIcon icon={faTree} className='nav-icon' />
            <p>
              UI Elements
              <FontAwesomeIcon icon={faAngleLeft} className='right' />
            </p>
          </NavLink>
          <ul className='nav nav-treeview'>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>General</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Icons</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Buttons</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Sliders</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Modals & Alerts</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Navbar & Tabs</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Timeline</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Ribbons</p>
              </NavLink>
            </NavItem>
          </ul>
        </NavItem>

        <NavItem>
          <NavLink href='#'>
            <FontAwesomeIcon icon={faEdit} className='nav-icon' />
            <p>
              Forms
              <FontAwesomeIcon icon={faAngleLeft} className='right' />
            </p>
          </NavLink>
          <ul className='nav nav-treeview'>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>General Elements</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Advanced Elements</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Editors</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Validation</p>
              </NavLink>
            </NavItem>
          </ul>
        </NavItem>

        <NavItem>
          <NavLink href='#'>
            <FontAwesomeIcon icon={faTable} className='nav-icon' />
            <p>
              Tables
              <FontAwesomeIcon icon={faAngleLeft} className='right' />
            </p>
          </NavLink>
          <ul className='nav nav-treeview'>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>Simple Tables</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>DataTables</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='#'>
                <FontAwesomeIcon icon={farCircle} className='nav-icon' />
                <p>jsGrid</p>
              </NavLink>
            </NavItem>
          </ul>
        </NavItem>
      </LteNavSidebar>
    </LteMainSidebar>
  );
}
