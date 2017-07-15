// @flow

import React from 'react'

type Props = {
  item: Object,
}

const addRef = url => (
  url.indexOf('?') !== -1 ? `${url}&ref=braquet.io` : `${url}?ref=braquet.io`
)

const ListItem = ({ item }: Props) => (
  <a href={addRef(item.get('organization').get('url'))} target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action mb-3" style={{ boxShadow: '2px 2px 5px #888888', borderRadius: '5px' }}>
    <div className="media d-flex w-100 justify-content-between">
      <div className="media-left mr-2" style={{ height: '100px' }}>
        <img className="img-thumbnail" src={item.get('organization').get('logoImageUrl')} alt="" width="100" />
      </div>
      <div className="media-body">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {`$${Number(item.get('price') / 100).toFixed(2)} per watt`}
          </h5>
          <small>{(new Date(item.get('quoteDate'))).toLocaleDateString('en-US')}</small>
        </div>
        <p className="list-group-item-text">
          {`${item.get('stcPower')}W ${item.get('manufacturer')} ${item.get('panelType')} Solar Module`}
        </p>
        <p className="list-group-item-text">
          {`Project Size: ${item.get('quantity')}`}
        </p>
      </div>
    </div>
  </a>
)

export default ListItem
