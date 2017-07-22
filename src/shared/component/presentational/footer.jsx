// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import {
  PRIVACY_POLICY_PAGE_ROUTE,
} from '../../routes'

import { APP_NAME } from '../../config'

const Footer = () =>
  (
    <div className="mt-5 d-flex align-items-center justify-content-center" style={{ height: 75, backgroundColor: '#222' }}>
      <footer>
        <p style={{ color: '#fff' }}>© 2017 {APP_NAME} Inc. | <Link to={PRIVACY_POLICY_PAGE_ROUTE} style={{ color: '#fff' }}>Privacy Policy</Link></p>
      </footer>
    </div>
  )

export default Footer
