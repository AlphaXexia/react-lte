import React from 'react';
import PropTypes from 'prop-types';
import { faComments as farComments } from '@fortawesome/free-regular-svg-icons';
import { DropdownItem } from 'reactstrap';
import LteNavDropdown from '../../components/navbar/LteNavDropdown';
import LteMessageNavItem from '../../components/navbar/LteMessageNavItem';

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      href: PropTypes.string,
      avatar: PropTypes.string,
      user: PropTypes.string,
      message: PropTypes.node,
      date: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
  href: PropTypes.string,
};

const defaultProps = {
  href: '#',
};

const Content = ({ data }) =>
  data.map(({ id, href, avatar, user, message, date, color }) => (
    <div key={id}>
      <DropdownItem tag='a' href={href}>
        <LteMessageNavItem
          avatar={avatar}
          user={user}
          message={message}
          date={date}
          textColor={color}
        />
      </DropdownItem>
      <DropdownItem divider />
    </div>
  ));

const MessageMenu = ({ data, href }) => {
  return (
    <LteNavDropdown icon={farComments} badgeText={data.length}>
      <Content data={data} />
      <DropdownItem tag='a' href={href} className='dropdown-footer'>
        See All Messages
      </DropdownItem>
    </LteNavDropdown>
  );
};

MessageMenu.propTypes = propTypes;
MessageMenu.defaultProps = defaultProps;

export default MessageMenu;
