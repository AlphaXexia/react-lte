import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import {
  faChartPie,
  faCog,
  faShoppingBasket,
  faShoppingCart,
  faThumbsUp,
  faUserPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col, Row } from 'reactstrap';
import LteContent from '../../src/components/LteContent';
import LteContentHeader from '../../src/components/LteContentHeader';
import LteInfoBox from '../../src/components/LteInfoBox';
import LteSmallBox from '../../src/components/LteSmallBox';

export default function DemoDashboard() {
  return (
    <>
      <LteContentHeader title='Dashboard' />
      <LteContent>
        <Row>
          <Col lg='3' xs='6'>
            <LteSmallBox title='150' message='New Orders' href='/info' icon={faShoppingBasket} color='info' />
          </Col>
          <Col lg='3' xs='6'>
            <LteSmallBox title='53%' message='Bounce Rate' href='/info' icon={faChartBar} color='success' />
          </Col>
          <Col lg='3' xs='6'>
            <LteSmallBox title='44' message='User Registrations' href='/info' icon={faUserPlus} color='warning' />
          </Col>
          <Col lg='3' xs='6'>
            <LteSmallBox title='65' message='Unique Visitors' href='/info' icon={faChartPie} color='danger' />
          </Col>
        </Row>

        <Row>
          <Col xs='12' sm='6' md='3'>
            <LteInfoBox icon={faCog} text='CPU Traffic' number='10%' color='info' />
          </Col>
          <Col xs='12' sm='6' md='3'>
            <LteInfoBox icon={faThumbsUp} text='Likes' number='41,410' color='danger' />
          </Col>
          <div className='clearfix hidden-md-up' />
          <Col xs='12' sm='6' md='3'>
            <LteInfoBox icon={faShoppingCart} text='Sales' number='760' color='success' />
          </Col>
          <Col xs='12' sm='6' md='3'>
            <LteInfoBox icon={faUsers} text='New Members' number='2,000' color='warning' />
          </Col>
        </Row>
      </LteContent>
    </>
  );
}
