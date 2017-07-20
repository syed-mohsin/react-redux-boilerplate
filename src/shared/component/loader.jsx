// @flow

import React from 'react'
import ContentLoader, { Rect } from 'react-content-loader'

const Loader = () => (
  <ContentLoader height={2000} speed={1} primaryColor={'#f3eaea'} secondaryColor={'#999'}>
    {/* <Rect x={0} y={0} height={50} width={50} radius={5} /> */}
    <Rect x={0} y={0} height={2000} radius={2} width={400} />
    {/* <Rect x={55} y={20} height={10} radius={5} width={345} />
    <Rect x={55} y={40} height={10} radius={5} width={345} /> */}
  </ContentLoader>
)

export default Loader
