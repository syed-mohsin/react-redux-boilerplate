// @flow

import { createAction } from 'redux-actions'

export const SAY_HELLO = 'SAY_HELLO'

// this is a function
export const sayHello = createAction(SAY_HELLO)

// eslint-disable-next-line no-console
console.log('action', sayHello)
