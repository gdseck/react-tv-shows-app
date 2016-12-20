import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import NavBar from './NavBar.jsx'

const App = (props) => (
  <div>
    <NavBar />
    {props.children}
    <div style={{height: '1000px', background: 'yellow'}} />
  </div>
)

App.propTypes = {
  children: React.PropTypes.object
}

const Home = () => (
  <h1>Home</h1>
)

const SeriesList = () => (
  <h1>List of series</h1>
)

export default () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/series-list' component={SeriesList} />
    </Route>
  </Router>
)
