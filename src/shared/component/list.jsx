// @flow

import React from 'react'

import ListItem from './list-item'

class List extends React.Component {
  componentDidMount() {
    this.props.loadItems()
  }

  props: {
    loadItems: Function,
    items: Object,
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.items.map(item => <ListItem key={item.get('_id')} item={item} />)}
        </ul>
      </div>
    )
  }
}

export default List
