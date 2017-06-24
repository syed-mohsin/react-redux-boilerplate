// @flow

import React from 'react'

import ListItem from './list-item'

class List extends React.Component {
  componentDidMount() {
    if (!this.props.message) {
      this.props.loadItems()
    }
  }

  props: {
    loadItems: Function,
    items: Object,
    message: string,
  };

  render() {
    return (
      <div className="list-group">
        {this.props.items.map(
          item => <ListItem key={item.get('_id')} item={item} />)
        }
      </div>
    )
  }
}

export default List
