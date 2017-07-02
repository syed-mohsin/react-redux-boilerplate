// @flow

import React from 'react'

type Props = {
  item: Object,
}

const ListItem = ({ item }: Props) => (
  <a href="" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="">
        {`$${item.get('price') / 100}: ${item.get('organization').get('companyName')}`}
      </h5>
      <small>{(new Date(item.get('quoteDate'))).toLocaleDateString('en-US')}</small>
    </div>
    <p className="list-group-item-text">{`${item.get('panelType')}, ${item.get('manufacturer')}`}</p>
  </a>
)

export default ListItem
