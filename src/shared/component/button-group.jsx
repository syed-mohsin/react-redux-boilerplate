// @flow

import React from 'react'

const ButtonGroup = (props: Object) => (
  <div className="input-group" style={{ marginBottom: 20 }}>
    <input type="text" className="form-control" placeholder="Search for..." />
    <select className="custom-select" name="sortBy" defaultValue={props.query.sortBy || 'recent'} onChange={props.onChange}>
      <option value="">Sort By</option>
      <option value="recent">Most Recent</option>
      <option value="price-low">Price Low to High</option>
      <option value="price-high">Price High to Low</option>
      <option value="wattage">Wattage</option>
    </select>
  </div>
)

export default ButtonGroup
