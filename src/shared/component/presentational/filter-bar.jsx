// @flow

import React from 'react'
import { Typeahead, Menu, MenuItem } from 'react-bootstrap-typeahead'
import queryString from 'query-string'

class FilterBar extends React.Component {
  constructor(props: Object) {
    super()
    this.state = {
      brandSearch: props.query.brandSearch || '',
      panelType: props.query.panelType || '',
      quantity: props.query.quantity || '',
    }

    this.onBrandChange = this.onBrandChange.bind(this)
    this.onPanelTypeChange = this.onPanelTypeChange.bind(this)
    this.onQuantityChange = this.onQuantityChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state: {
    brandSearch: string,
    panelType: string,
    quantity: string,
  }

  componentWillReceiveProps(newProps: Object) {
    if (!newProps.query.brandSearch) {
      this.typeahead.getInstance().clear()
    }

    this.setState({
      brandSearch: newProps.query.brandSearch || '',
      panelType: newProps.query.panelType || '',
      quantity: newProps.query.quantity || '',
    })
  }


  onBrandChange(text: string) {
    this.setState({ brandSearch: text })
  }

  onPanelTypeChange(event: Object) {
    this.setState({ panelType: event.target.value })
  }

  onQuantityChange(event: Object) {
    this.setState({ quantity: event.target.value })
  }

  onBrandChange: Function
  onPanelTypeChange: Function
  onQuantityChange: Function
  handleSubmit: Function
  typeahead: Object

  props: {
    orgs: Object,
    query: Object,
    history: Object,
  }

  handleSubmit(event: Object) {
    event.preventDefault()

    const query = {
      brandSearch: this.state.brandSearch,
      panelType: this.state.panelType || '',
      quantity: this.state.quantity || '0kW-100kW',
    }

    this.props.history.push(`/quotes?${queryString.stringify(query)}`)
  }

  render() {
    return (
      <div className="container-fluid d-flex justify-content-center mb-2" style={{ border: '1px solid #cecece' }}>
        <form className="row mb-2 mt-4 w-100 d-flex justify-content-center" onSubmit={this.handleSubmit}>
          <div className="col-md-3 col-xs-12">
            <label className="mr-sm-2 sr-only" htmlFor="brandSearch">Search for a Brand</label>
            <Typeahead
              onInputChange={this.onBrandChange}
              selected={[this.state.brandSearch]}
              value={this.state.brandSearch}
              options={this.props.orgs.toArray()}
              className="mb-2 w-100"
              submitFormOnEnter
              placeholder="Select a Brand"
              name="brandSearch"
              ref={(ref) => { this.typeahead = ref }}
              renderMenu={(results, menuProps) => (
                <Menu {...menuProps}>
                  {results.map((org, i) => (
                    <MenuItem className="dropdown-item" role="button" option={org} position={i} key={org}>
                      {org}
                    </MenuItem>
                  ),
                  )}
                </Menu>
              )}
            />
          </div>

          <div className="col-md-3 col-xs-12">
            <label className="mr-sm-2 sr-only" htmlFor="panelType">Type of Module</label>
            <select className="custom-select mb-2 w-100" name="panelType" value={this.state.panelType} onChange={this.onPanelTypeChange}>
              <option value="">Type of Module</option>
              <option value="Mono">Monocrystalline</option>
              <option value="Poly">Polycrystalline</option>
              <option value="CIGS">CIGS</option>
              <option value="CdTe">CdTe</option>
              <option value="all">All</option>
            </select>
          </div>

          <div className="col-md-3 col-xs-12">
            <label className="mr-sm-2 sr-only" htmlFor="quantity">Project Size</label>
            <select className="custom-select mb-2 w-100" name="quantity" value={this.state.quantity || '0kW-100kW'} onChange={this.onQuantityChange}>
              <option value="">Project Size</option>
              <option value="0kW-100kW">0kW-100kW</option>
              <option value="101kW-500kW">101kW-500kW</option>
              <option value="501kW-1MW">501kW-1MW</option>
              <option value=">1MW">{'>1MW'}</option>
            </select>
          </div>

          <button type="submit" className="btn ml-3 mb-2 text-left" style={{ backgroundColor: '#222', color: '#fff' }}>Find Quotes</button>
        </form>
      </div>
    )
  }
}

export default FilterBar
