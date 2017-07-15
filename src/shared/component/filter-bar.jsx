// @flow

import React from 'react'
import { Typeahead, Menu, MenuItem } from 'react-bootstrap-typeahead'

const FilterBar = (props: Object) => (
  <div className="container-fluid d-flex justify-content-center" style={{ marginBottom: 20, border: '1px solid #cecece' }}>
    <form className="row mb-4 mt-4">

      <div className="col-md-4 col-xs-12">
        <label className="mr-sm-2 sr-only" htmlFor="brandSearch">Search for a Brand</label>
        {props.orgs && <Typeahead
          onChange={props.onChange}
          defaultSelected={[props.query.brandSearch]}
          options={props.orgs.toArray()}
          className="mb-2 mr-sm-0 w-100"
          submitFormOnEnter
          placeholder="Select a Brand"
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
      </div>

      <div className="col-md-3 col-xs-12">
        <label className="mr-sm-2 sr-only" htmlFor="panelType">Type of Module</label>
        <select className="custom-select mb-2 w-100" name="panelType" defaultValue={props.query.panelType}>
          <option value="">Type of Module</option>
          <option value="Mono">Monocrystalline</option>
          <option value="Poly">Polycrystalline</option>
          <option value="CIGS">CIGS</option>
          <option value="CdTe">CdTe</option>
        </select>
      </div>

      <div className="col-md-3 col-xs-12">
        <label className="mr-sm-2 sr-only" htmlFor="quantity">Project Size</label>
        <select className="custom-select mb-2 w-100" name="quantity" defaultValue={props.query.quantity}>
          <option value="">Project Size</option>
          <option value="0kW-100kW">0kW-100kW</option>
          <option value="101kW-500kW">101kW-500kW</option>
          <option value="501kW-1MW">501kW-1MW</option>
          <option value=">1MW">{'>1MW'}</option>
          <option value="all">All</option>
        </select>
      </div>

      <div className="col-md-2 col-xs-12">
        <button type="submit" className="btn btn-primary">Find Quotes</button>
      </div>
    </form>
  </div>
)

export default FilterBar
