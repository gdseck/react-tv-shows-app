import React from 'react'
import Relay from 'react-relay'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, applyRouterMiddleware, browserHistory} from 'react-router'
import useRelay from 'react-router-relay'

import App from './components/app.jsx'
import Home from './components/home.jsx'
import SeriesList from './components/series-list.jsx'

const queries = {
  seriesList: () => Relay.QL`query { seriesList }`
}

render(
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(useRelay)}
    environment={Relay.Store}
  >
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/series-list' component={SeriesList} queries={queries} />
    </Route>
  </Router>,
  document.getElementById('root')
)
