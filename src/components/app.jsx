import React from 'react'
import styled from 'styled-components'

import NavBar from './navbar.jsx'

export default class App extends React.Component {
  render () {
    return (
      <StyledApp>
        <NavBar />
        {this.props.children}
      </StyledApp>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.object
}

const StyledApp = styled.div`
  top: 4em;
  width: 100%;
  bottom: 0;
  position: absolute;
  font-family: Noto Sans;
  background: beige;
`
