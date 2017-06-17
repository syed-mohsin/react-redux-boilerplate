// @flow

import React from 'react'

// define a flow type of props
// where key1 is label of type string
// and key2 is handleClick of type function
type Props = {
  label: string,
  handleClick: Function,
}

// { destructure label and handleClick } from props first argument
// and give flowType Props as defined
const Button = ({ label, handleClick }: Props) =>
  <button onClick={handleClick}>{label}</button>

export default Button
