import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils'

import CardIcon from '../card-icon/card-icon.component';
import CardDropdown from '../card-dropdown/card-dropdown.compoment';

import './header.style.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg';


const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to="/shop">
        SHOP
      </Link>
      <Link className='option' to="/">
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
      ) : (
          <Link className='option' to='/signin'>SIGN IN</Link>
        )}
      <CardIcon />
    </div>
    {hidden ? null : <CardDropdown />}
  </div>
)

const mapStateToProps = ({ user: { currentUser }, card: { hidden } }) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);