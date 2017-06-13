// @flow

import React from 'react'
import { APP_NAME } from '../shared/config'
import HelloButton from './container/hello-button'
import Message from './container/message'

const App = () => (
  <div>
    <h1>{APP_NAME}</h1>
    <Message />
    <HelloButton />
  </div>
)

export default App
