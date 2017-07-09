// @flow

import React from 'react'
import QuoteResultsCount from '../container/quote-results-count'

const ButtonGroup = (props: Object) => (
  <div className="input-group md-flex justify-content-between" style={{ marginBottom: 20 }}>
    <QuoteResultsCount />
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
