// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

import { APP_NAME } from '../../config'


const styles = {}

const CodeLancerHomePage = () => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Codelancer matches talented coders with exciting and fast-paced projects' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <div className="site-wrapper">

      <div className="site-wrapper-inner">

        <div className="cover-container">

          <div className="masthead clearfix">
            <div className="inner">
              <h3 className="masthead-brand">Codelancer</h3>
              <nav className="nav nav-masthead">
                <a className="nav-link active" href="">Home</a>
                <a className="nav-link" href="">Features</a>
                <a className="nav-link" href="">Contact</a>
              </nav>
            </div>
          </div>

          <div className="inner cover">
            <h1 className="cover-heading">Cover your page.</h1>
            <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p className="lead">
              <a href="" className="btn btn-lg btn-secondary">Learn more</a>
            </p>
          </div>

          <div className="mastfoot">
            <div className="inner">
              <p>@ 2017 Codelancer Inc. | Privacy Policy</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
)

export default injectSheet(styles)(CodeLancerHomePage)
