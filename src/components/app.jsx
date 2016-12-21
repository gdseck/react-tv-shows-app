import React from 'react'
import NavBar from './navbar.jsx'

export default class App extends React.Component {
  render () {
    return (
      <div style={{top: '4em', position: 'relative'}}>
        <NavBar />
        {this.props.children}
        <div style={{height: '1000px', background: 'yellow'}} />
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.object
}
