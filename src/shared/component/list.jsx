// @flow

import React from 'react'
import uuid from 'uuid/v1'
import $ from 'jquery'

import Loader from './loader'
import ListItem from './list-item'

const LOADER_COUNT = 5

class List extends React.Component {
  componentDidMount() {
    if (!this.props.message) {
      this.props.loadItems(this.props.query)
      this.props.loadNames()
    }
  }

  componentWillReceiveProps(newProps: Object) {
    if (JSON.stringify(this.props.query) !== JSON.stringify(newProps.query)) {
      this.props.loadItems(newProps.query)
    }
  }

  componentDidUpdate() {
    $('body').scrollTop(0)
  }

  componentWillUnmount() {
    this.props.clearState()
  }

  props: {
    loadItems: Function,
    loadNames: Function,
    clearState: Function,
    items: Object,
    message: string,
    query: Object,
  }

  render() {
    return (
      <div className="list-group" style={{ marginBottom: 20 }}>
        {this.props.message === 'success' && this.props.items.size !== 0 &&
         this.props.items.map(
          item => <ListItem key={item.get('_id')} item={item} />)}

        {this.props.message === 'loading' && Array(LOADER_COUNT).fill(null).map(() => <Loader key={uuid()} />) }

        {(this.props.message === 'failure' ||
          (this.props.message === 'success' && this.props.items.size === 0)) &&
          <div className="alert alert-info text-center">No results</div>}
      </div>
    )
  }
}

export default List
