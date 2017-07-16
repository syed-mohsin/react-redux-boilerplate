// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import classNames from 'classnames'

import { STATIC_PATH, APP_NAME } from '../../config'

const styles = {
  homeBackground: {
    background: `url("${STATIC_PATH}/img/home-background.jpg")`,
    backgroundSize: 'cover',
  },
  homeBackgroundShade: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: '100vh',
  },
  homeDescription: {
    composes: 'mb-5',
    lineHeight: '48px',
    fontWeight: '700',
    color: 'white',
    fontSize: '36pt',
    '@media (max-width: 768px)': {
      lineHeight: '34px',
      fontSize: '20pt',
    },
  },
  homeSubDescription: {
    textAlign: 'left',
    color: 'white',
    marginBottom: '20px',
    fontSize: '18px',
  },
  homeContainer: {
    composes: 'pt-5',
    maxWidth: '462px',
    '@media (min-width: 768px)': {
      paddingTop: '125px !important',
      marginLeft: '100px',
    },
  },
  homeSubmitButton: {
    composes: 'btn w-100 mt-2 mb-1',
    background: '#4CAF50',
    color: 'white',
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
        <div className={classNames({
          [classes.homeContainer]: true,
          container: true,
        })}
        >
          <h1 className={classes.homeDescription}>
            Lookup quotes from solar module manufacturers and resellers
          </h1>
          <form action="/quotes">
            <h4 className={classes.homeSubDescription}>
              Make sure your company is receiving competitive quotes from your suppliers.
            </h4>
            <div className="selectContainer d-flex justify-content-between">
              <select name="panelType" className="custom-select w-50">
                <option value="">Type of Module</option>
                <option value="Mono">Monocrystalline</option>
                <option value="Poly">Polycrystalline</option>
                <option value="CIGS">CIGS</option>
                <option value="CdTe">CdTe</option>
                <option value="all">All</option>
              </select>

              <select name="quantity" className="custom-select w-50">
                <option value="">Project Size</option>
                <option value="0kW-100kW">0kW-100kW</option>
                <option value="101kW-500kW">101kW-500kW</option>
                <option value="501kW-1MW">501kW-1MW</option>
                <option value=">1MW">{'>1MW'}</option>
                <option value="all">All</option>
              </select>
            </div>

            <button type="submit" className={classes.homeSubmitButton}>Find quotes</button>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(BraquetHomePage)
