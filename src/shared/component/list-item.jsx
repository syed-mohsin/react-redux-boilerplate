// @flow

import React from 'react'

type Props = {
  item: Object,
}

const ListItem = ({ item }: Props) => (
  <li>{item.get('price')}</li>
)

export default ListItem
