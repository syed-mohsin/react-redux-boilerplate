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
      userType: $('#first_toggle').is(':checked') ? $('#first_toggle').val() : $('#second_toggle').val(),
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

const title = 'Hire Skilled Freelance College Coders'
const CodeLancerHomePage = () => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Codelancer matches talented student software engineers and web developers from top colleges with exciting and fast-paced freelance contracts' },
        { property: 'og:title', content: `${APP_NAME} - ${title}` },
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
                    <p className="text-light sub-title hidden-sm-down">Hire a talented young developer for your next project</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <form className="text-xs-center" id="subscribe-form" onSubmit={submitForm}>
                      <div className="form-group mb-0">
                        <label htmlFor="mce-FULL_NAME" />
                        <input type="text" className="form-control input-subscribe mb-0" id="mce-FULL_NAME" name="name" placeholder="Enter Full Name" required />
                      </div>
                      <div className="form-group mb-0">
                        <label htmlFor="mce-EMAIL" />
                        <input type="email" className="form-control input-subscribe" id="mce-EMAIL" name="email" placeholder="Enter Email Address" required />
                      </div>
                      <div className="form-group mb-0">
                        <div className="toggle_radio mt-4">
                          <input type="radio" className="toggle_option" id="first_toggle" name="userType" defaultChecked value="employer" />
                          <input type="radio" className="toggle_option" id="second_toggle" name="userType" value="student" />
                          <label htmlFor="first_toggle" style={{ fontSize: '18px' }}>Employer</label>
                          <label htmlFor="second_toggle" style={{ fontSize: '18px' }}>Student</label>
                          <div className="toggle_option_slider" />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-white-fill subscribe-action-button mt-3">Join Now</button>
                      <p className="text-light mt-1">
                        {/* <small>Stay updated on exciting new coding projects</small> */}
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
