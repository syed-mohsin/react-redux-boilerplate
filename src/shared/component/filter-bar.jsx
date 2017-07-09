// @flow

import React from 'react'
import { Typeahead, Menu, MenuItem } from 'react-bootstrap-typeahead'

const FilterBar = (props: Object) => (
  <div className="container-fluid" style={{ marginBottom: 20, border: '1px solid #cecece' }}>
    <form action="/quotes" className="form-inline d-flex justify-content-center" style={{ marginTop: 20, marginBottom: 20 }}>

      <label className="mr-sm-2 sr-only" htmlFor="brandSearch">Search for a Brand</label>
      {props.orgs && <Typeahead
        onChange={props.onChange}
        defaultSelected={[props.query.brandSearch]}
        options={props.orgs.toArray()}
        className="mb-2 mr-sm-2 mb-sm-0"
        submitFormOnEnter
        placeholder="Please Select a Brand"
        name="brandSearch"
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
      />}

      <label className="mr-sm-2 sr-only" htmlFor="panelType">Type of Module</label>
      <select className="custom-select mb-2 mr-sm-2 mb-sm-0" name="panelType" defaultValue={props.query.panelType}>
        <option value="">Type of Module</option>
        <option value="Mono">Monocrystalline</option>
        <option value="Poly">Polycrystalline</option>
        <option value="CIGS">CIGS</option>
        <option value="CdTe">CdTe</option>
      </select>

      <label className="mr-sm-2 sr-only" htmlFor="quantity">Project Size</label>
      <select className="custom-select mb-2 mr-sm-2 mb-sm-0" name="quantity" defaultValue={props.query.quantity}>
        <option value="">Project Size</option>
        <option value="0kW-100kW">0kW-100kW</option>
        <option value="101kW-500kW">101kW-500kW</option>
        <option value="501kW-1MW">501kW-1MW</option>
        <option value=">1MW">{'>1MW'}</option>
        <option value="all">All</option>
      </select>
      <button type="submit" className="btn btn-primary">Find Quotes</button>
    </form>
  </div>
)

export default FilterBar
