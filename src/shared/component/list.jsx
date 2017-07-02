// @flow

import React from 'react'

import ListItem from './list-item'


class List extends React.Component {
  componentDidMount() {
    if (!this.props.message) {
      this.props.loadItems(this.props.query)
    }
  }

  componentWillReceiveProps(newProps: Object) {
    if (JSON.stringify(this.props.query) !== JSON.stringify(newProps.query)) {
      this.props.loadItems(newProps.query)
    }
  }

  props: {
    loadItems: Function,
    items: Object,
    message: string,
    query: Object,
  }

  render() {
    return (
      <div className="list-group col-xs-3">
        {this.props.message && this.props.items.map(
          item => <ListItem key={item.get('_id')} item={item} />)}
      </div>
    )
  }
}

export default List
