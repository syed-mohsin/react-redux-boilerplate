// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import { STATIC_PATH, APP_NAME } from '../../config'

const styles = {
  homeBackground: {
    background: `url("${STATIC_PATH}/img/home-background.jpg")`,
    'background-size': 'cover',
  },
  homeBackgroundShade: {
    'background-color': 'rgba(0,0,0,0.3)',
    height: '100vh',
  },
  homeDescription: {
    'line-height': '48px',
    'font-weight': '700',
    color: 'white',
    'font-size': '36pt',
    position: 'relative',
    top: '-39px',
  },
  homeSubDescription: {
    'text-align': 'left',
    color: 'white',
    'margin-bottom': '20px',
    'font-size': '18px',
  },
  homeContainer: {
    composes: ['container'],
    top: '10%',
    right: '15%',
    'max-width': '462px',
  },
  homeSubmitButton: {
    composes: ['btn'],
    background: '#4CAF50',
    color: 'white',
    width: '100%',
    'margin-top': '5px',
    'margin-bottom': '10px',
  },
  select: {
    composes: ['form-control'],
    width: '50%',
  },
  pullLeft: {
    float: 'left !important',
  },
  pullRight: {
    float: 'right !important',
  },
}

const BraquetHomePage = ({ classes }: { classes: Object }) => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Search for qualified solar hardware suppliers' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <div className={classes.homeBackground}>
      <div className={classes.homeBackgroundShade}>
        <div className={classes.homeContainer}>
          <h1 className={classes.homeDescription}>
            Lookup quotes from solar module manufacturers and resellers
          </h1>
          <form action="/quotes" className="ng-pristine no-background no-padding no-margin signin">
            <h4 className={classes.homeSubDescription}>
              Make sure your company is receiving competitive quotes from your suppliers.
            </h4>
            <select
              name="panelType"
              id="panelType"
              className={classNames({
                [classes.select]: true,
                [classes.pullRight]: true,
              })}
            >
              <option value="">Type of Module</option>
              <option value="Mono">Monocrystalline</option>
              <option value="Poly">Polycrystalline</option>
              <option value="CIGS">CIGS</option>
              <option value="CdTe">CdTe</option>
              <option value="all">All</option>
            </select>

            <select
              name="quantity"
              id="quantity"
              className={classNames({
                [classes.select]: true,
                [classes.pullRight]: true,
              })}
            >
              <option value="">Project Size</option>
              <option value="0kW-100kW">0kW-100kW</option>
              <option value="101kW-500kW">101kW-500kW</option>
              <option value="501kW-1MW">501kW-1MW</option>
              <option value=">1MW">{'>1MW'}</option>
            </select>

            <button type="submit" className={classes.homeSubmitButton}>Find quotes</button>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(BraquetHomePage)
