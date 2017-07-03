// @flow

import React from 'react'

type Props = {
  item: Object,
}

const ListItem = ({ item }: Props) => (
  <a href="" className="list-group-item list-group-item-action flex-column align-items-start">
    {/* <img src={item.get('organization').get('logoImageUrl')}
    alt="" className="img-thumbnail" /> */}
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">
        {`$${item.get('price') / 100}: ${item.get('organization').get('companyName')}`}
      </h5>
      <small>{(new Date(item.get('quoteDate'))).toLocaleDateString('en-US')}</small>
    </div>
    <p className="list-group-item-text">{`${item.get('panelType')},
      ${item.get('manufacturer')}, ${item.get('quantity')}, ${item.get('stcPower')}W`}</p>
  </a>
)

export default ListItem
