// @flow

import React from 'react'
import Rating from 'react-rating'

import { STATIC_PATH } from '../config'

type Props = {
  item: Object,
}

const addRef = url => (
  url.indexOf('?') !== -1 ? `${url}&ref=braquet.io` : `${url}?ref=braquet.io`
)

const formatPanelType = panelType => (
  ['Mono', 'Poly'].indexOf(panelType) !== -1 ? `${panelType}crystalline` : panelType
)

const ListItem = ({ item }: Props) => (
  <div className="list-group-item mb-3 d-flex justify-content-center mx-auto w-100" style={{ boxShadow: '2px 2px 5px #888888', borderRadius: '5px' }}>
    <div className="w-100 d-flex justify-content-between align-items-center flex-column flex-md-row">
      <div className="mr-md-3 mb-2">
        <img src={item.get('organization').get('logoImageUrl')} alt="" style={{ width: '125px' }} />
      </div>
      <div className="w-100">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {`${item.get('stcPower')} W ${item.get('manufacturer')} ${formatPanelType(item.get('panelType'))} Solar Module`}
          </h5>
        </div>
        <div>
          {`by ${item.get('organization').get('companyName')}`}
        </div>
        <div className="mb-3">
          <span className="text-center">
            <Rating
              placeholderRate={item.get('organization').get('avg_review')}
              empty={<img src={`${STATIC_PATH}/stars/gray-star.png`} alt="" className="icon" width="15" />}
              placeholder={<img src={`${STATIC_PATH}/stars/yellow-star.jpg`} alt="" className="icon" width="15" />}
              full={<img src={`${STATIC_PATH}/stars/yellow-star.jpg`} alt="" className="icon" width="15" />}
              readonly
            />
            <span style={{ fontSize: '14px' }}>{` (${item.get('organization').get('reviews_length')})`} Reviews</span>
          </span>
        </div>
        <div className="row mx-auto d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center mb-1 col-xs-12 col-md-4 p-2" style={{ whiteSpace: 'nowrap' }}>
            <small><b>{`${item.get('stcPower')}`}</b></small>
            <small>Module Wattage</small>
          </div>
          <div className="d-flex flex-column align-items-center mb-1 col-xs-12 col-md-4 p-2" style={{ whiteSpace: 'nowrap' }}>
            <small><b>{formatPanelType(item.get('panelType'))}</b></small>
            <small>Technology</small>
          </div>
          <div className="d-flex flex-column align-items-center mb-1 col-xs-12 col-md-4 p-2" style={{ whiteSpace: 'nowrap' }}>
            <small><b>{`${item.get('quantity')}`}</b></small>
            <small>Project Size</small>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center ml-md-3" style={{ height: '125px' }}>
        <h6><big style={{ whiteSpace: 'nowrap' }}>{`$${Number(item.get('price') / 100).toFixed(3)} per watt`}</big></h6>
        <a role="button" href={addRef(item.get('organization').get('url'))} target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: '#222', color: '#fff', padding: '9px 22px', fontSize: '14px', borderRadius: '0' }}>Contact Seller</a>
      </div>
    </div>
  </div>
)

export default ListItem
