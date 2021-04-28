import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './utils/styles/GlobalStyles'
import App from './App'

import ThemedSuspense from './components/common/ThemedSuspense'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<ThemedSuspense />}>
      <GlobalStyles />
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
