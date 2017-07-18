// @flow

import $ from 'jquery'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  QUOTES_PAGE_ROUTE,
} from '../routes'

import { STATIC_PATH } from '../config'

const handleNavLinkClick = () => {
  $('body').scrollTop(0)
  $('.js-navbar-collapse').collapse('hide')
}

const Nav = () => (
  <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top" style={{ backgroundColor: '#222' }}>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
      <span className="navbar-toggler-icon" />
    </button>
    <Link to={HOME_PAGE_ROUTE} className="navbar-brand" style={{ width: '125px' }}><img className="logo w-100" src={`${STATIC_PATH}/img/logo.png`} alt="" /></Link>
    <div className="js-navbar-collapse collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        {[
          { route: QUOTES_PAGE_ROUTE, label: 'Quotes' },
          { route: '/aboutus', label: 'About Us' },
          { route: '/faq', label: 'FAQ' },
        ].map(link => (
          <li className="nav-item" key={link.route}>
            <NavLink to={link.route} className="nav-link" activeStyle={{ color: 'white' }} exact onClick={handleNavLinkClick}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
)

export default Nav
