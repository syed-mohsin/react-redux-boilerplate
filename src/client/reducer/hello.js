// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import { SAY_HELLO } from '../action/hello'

const initialState = Immutable.fromJS({ // creates an ImmutableJS collection
  message: 'Initial reducer message',
})

// state is of type Immut and default val is initialState
const helloReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SAY_HELLO:
      return state.set('message', action.payload) // ImmutableJS set()
    default:
      return state
  }
}

export default helloReducer

// Components are dumb React components, in a sense that they don't know
// anything about the Redux state.
// Containers are smart components that know about the state and that we are
// going to connect to our dumb components.
