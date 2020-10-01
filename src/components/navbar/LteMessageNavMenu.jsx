import React from 'react';
import PropTypes from 'prop-types';
import { faClock, faComments, faStar } from '@fortawesome/free-solid-svg-icons';
import { DropdownItem, Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LteNavDropdown from './LteNavDropdown';

const Content = ({ data }) => data.map(({
  id, avatar, user, message, date,
}) => (
  <>
    <DropdownItem key={id} tag="a">
      <Media>
        <img src={avatar} alt="" className="img-size-50 mr-3 img-circle" />
        <Media body>
          <h3 className="dropdown-item-title">
            {user}
            <span className="float-right text-sm text-danger">
              <FontAwesomeIcon icon={faStar} />
            </span>
          </h3>
          <p className="text-sm">{message}</p>
          <p className="text-sm text-muted">
            <FontAwesomeIcon icon={faClock} />
            <span className="ml-1">{date}</span>
          </p>
        </Media>
      </Media>
    </DropdownItem>
    <DropdownItem divider />
  </>
));

export default function LteMessageNavMenu({ data }) {
  return (
    <LteNavDropdown icon={faComments} badgeText={data.length}>
      <Content data={data} />
      <DropdownItem tag="a" href="#" className="dropdown-footer">See All Messages</DropdownItem>
    </LteNavDropdown>
  );
}

LteMessageNavMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.ID,
      avatar: PropTypes.string,
      user: PropTypes.string,
      message: PropTypes.node,
      date: PropTypes.date,
    }),
  ),
};

LteMessageNavMenu.defaultProps = {
  data: [],
};
