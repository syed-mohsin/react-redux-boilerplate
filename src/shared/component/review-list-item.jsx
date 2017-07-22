// @flow

import React from 'react'
import Rating from 'react-rating'

import {
  STATIC_PATH,
} from '../config'


type Props = {
  item: Object,
  listItemHandler: Function,
}

const ReviewListItem = ({ item, listItemHandler }: Props) => (
  <div className="list-group-item mb-3 d-flex justify-content-center mx-auto w-100">
    <div className="d-flex justify-content-between w-100">
      <div className="mr-3">
        <img src={listItemHandler().get('logoImageUrl')} alt="" width="100" />
      </div>
      <div>
        <h5 className="mb-0">{`"${item.get('title')}"`}</h5>
        <div>
          <Rating
            placeholderRate={item.get('rating')}
            empty={<img src={`${STATIC_PATH}/stars/gray-star.png`} alt="" className="icon" width="17" />}
            placeholder={<img src={`${STATIC_PATH}/stars/yellow-star.jpg`} alt="" className="icon" width="17" />}
            full={<img src={`${STATIC_PATH}/stars/yellow-star.jpg`} alt="" className="icon" width="17" />}
            readonly
          />
        </div>
        <div className="mb-3">
          <small style={{ fontSize: '14px' }}> by anonymous on {(new Date(item.get('created'))).toLocaleDateString('en-US')}</small>
        </div>
        <div>{ item.get('content') }</div>
      </div>
    </div>
  </div>
)

export default ReviewListItem
