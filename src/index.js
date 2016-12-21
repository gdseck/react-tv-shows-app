import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from './components/app.jsx'
import Home from './components/home.jsx'
import SeriesList from './components/series-list.jsx'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/series-list' component={SeriesList} />
    </Route>
  </Router>,
  document.getElementById('root')
)
