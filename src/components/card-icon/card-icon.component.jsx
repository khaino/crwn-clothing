import React from 'react';
import { connect } from 'react-redux';
import { toggleCardHidden } from '../../redux/card/card.action'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './card-icon.style.scss';

const CardIcon = ({ toggleCardHidden }) => (
  <div className='cart-icon' onClick={toggleCardHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapStateToProps = dispatch => ({
  toggleCardHidden: () => { dispatch(toggleCardHidden()) }
})

export default connect(null, mapStateToProps)(CardIcon);