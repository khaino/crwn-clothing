import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './card-dropdown.style.scss'

const CardDropdown = () => (
  <div className='cart-dropdown '>
    <div className='car-items'/>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

export default CardDropdown;