// @flow

import React from 'react'
// import the component
import ContentLoader, { Rect } from 'react-content-loader'

import ListItem from './list-item'

const LOADER_COUNT = 5

const Loader = () => (
  <ContentLoader height={70} speed={5} primaryColor={'#f3eaea'} secondaryColor={'#999'}>
    <Rect x={0} y={0} height={50} width={50} />
    <Rect x={55} y={0} height={10} radius={5} width={300} />
    <Rect x={55} y={20} height={10} radius={5} width={300} />
    <Rect x={55} y={40} height={10} radius={5} width={300} />
  </ContentLoader>
)

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

        {this.props.message === 'loading' && Array(LOADER_COUNT).fill(null).map(() => <Loader />) }

        {(this.props.message === 'failure' ||
          (this.props.message === 'success' && this.props.items.size === 0)) &&
          <div className="alert alert-info text-center">No results</div>}
      </div>
    )
  }
}

export default List
