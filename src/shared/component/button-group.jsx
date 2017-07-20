// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import QuoteResultsCount from '../container/quote-results-count'

import {
  QUOTES_PAGE_ROUTE,
} from '../routes'

const ButtonGroup = (props: Object) => (
  <div className="input-group md-flex justify-content-between" style={{ marginBottom: 20 }}>
    <div>
      <QuoteResultsCount />
      <Link to={QUOTES_PAGE_ROUTE}>Clear Filter</Link>
    </div>
    <select className="custom-select" name="sortBy" value={props.query.sortBy || 'recent'} onChange={props.onChange}>
      <option value="">Sort By</option>
      <option value="recent">Most Recent</option>
      <option value="price-low">Price Low to High</option>
      <option value="price-high">Price High to Low</option>
      <option value="wattage">Wattage High to Low</option>
    </select>
  </div>
)

export default ButtonGroup
