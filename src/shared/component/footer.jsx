// @flow

import React from 'react'
import { APP_NAME } from '../config'

const Footer = () =>
  (
    <div className="mt-5 d-flex align-items-center justify-content-center" style={{ height: 75, backgroundColor: '#222' }}>
      <footer>
        <p style={{ color: '#fff' }}>© 2017 {APP_NAME} Inc. | Privacy Policy</p>
      </footer>
    </div>
  )

export default Footer
