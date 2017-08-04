// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import $ from 'jquery'

import { APP_NAME } from '../../config'

const styles = {}

const submitForm = (e) => {
  e.preventDefault()
  $('.subscribe-action-button').prop('disabled', true)
  $.ajax({
    url: '/api/mail',
    method: 'post',
    data: {
      name: $('#mce-FULL_NAME').val(),
      email: $('#mce-EMAIL').val(),
    },
  })
  .then(() => {
    NotificationManager.success('Thanks for signing up!')
    $('#mce-FULL_NAME').val(undefined)
    $('#mce-EMAIL').val(undefined)
    $('.subscribe-action-button').prop('disabled', false)
  })
  .catch(() => {
    NotificationManager.error('Unable to sign up. Please try again')
    $('.subscribe-action-button').prop('disabled', false)
  })
}

const CodeLancerHomePage = () => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Codelancer matches talented coders with exciting and fast-paced projects' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <NotificationContainer />
    <div className="site-wrapper">

      <div className="site-wrapper-inner">

        <div className="cover-container">

          <div className="masthead clearfix">
            <div className="inner">
              <h3 className="masthead-brand">Codelancer</h3>
              <nav className="nav nav-masthead">
                {/* <a className="nav-link active" href="">Home</a>
                <a className="nav-link" href="">Features</a>
                <a className="nav-link" href="">Contact</a> */}
              </nav>
            </div>
          </div>

          <div className="inner cover">
            <section className="bs4-newsletter">
              <div className="container">

                <div className="row">
                  <div className="col-sm-12 text-xs-center">
                    <h3 className="title text-white">Freelance for College Coders</h3>
                    <p className="text-light sub-title">Hire a talented young developer for your next project</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <form className="text-xs-center" id="subscribe-form" onSubmit={submitForm}>
                      <div className="form-group mb-0">
                        <label htmlFor="mce-FULL_NAME" />
                        <input type="text" className="form-control input-subscribe" id="mce-FULL_NAME" name="name" placeholder="Enter Full Name" required />
                      </div>
                      <div className="form-group mb-0">
                        <label htmlFor="mce-EMAIL" />
                        <input type="email" className="form-control input-subscribe" id="mce-EMAIL" name="email" placeholder="Enter Email Address" required />
                      </div>
                      <button type="submit" className="btn btn-white-fill subscribe-action-button mt-2">Join Now</button>
                      <p className="text-light mt-1">
                        <small>Stay updated on exciting new coding projects</small>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mastfoot">
            <div className="inner">
              <p>© 2017 Codelancer Inc. | Privacy Policy</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
)

export default injectSheet(styles)(CodeLancerHomePage)
