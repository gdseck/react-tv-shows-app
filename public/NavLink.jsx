import React from 'react'
import {Link} from 'react-router'
import Radium from 'radium'

let RLink = Radium(Link)

export default (props) => (
  <RLink {...props} style={[styles.navlink]} activeStyle={activeLink} />
)

export const activeLink = {
  fontSize: '1.1em',
  padding: '0.7em 1rem 0.6em 1rem',
  position: 'relative',
  display: 'inline-block',
  textDecoration: 'none',
  borderBottom: '8px solid black',
  boxSizing: 'border-box',
  background: 'rgb(164, 0, 0)',
  // borderBottom: '8px solid rgb(77, 13, 13)',
  color: 'white'
}

const styles = {
  navlink: {
    fontSize: '1.1em',
    color: '#bbb',
    padding: '0.7em 1rem 0.6em 1rem',
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    borderBottom: '8px solid black',
    boxSizing: 'border-box',
    ':hover': {
      background: 'rgb(164, 0, 0)',
      borderBottom: '8px solid rgb(164, 0, 0)',
      color: 'white'
    }
  }
}
