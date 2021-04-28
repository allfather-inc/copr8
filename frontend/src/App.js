import React, { lazy } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import AccessibleNavigationAnnouncer from './components/common/AccessibleNavigationAnnouncer'

const Home = lazy(() => import('./pages/Home'))

function App () {
  return (
    <>
      <Router>

        <Switch>
          {/* <Route path="/listings" component={Listings}/> */}
          {/* Place new routes over this */}
          <Route path='/home' component={Home} />

          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from='/' to='/home' />
        </Switch>
      </Router>
    </>
  )
}

export default App
