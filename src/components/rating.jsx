import React from 'react'
import styled from 'styled-components'

export default class Rating extends React.Component {
  render () {
    return (
      <div>
        <Star onClick={(e) => {e.preventDefault(); console.log('one star')}}>&times;</Star>
        <Star>&times;</Star>
        <Star>&times;</Star>
        <Star>&times;</Star>
        <Star>&times;</Star>
      </div>
    )
  }
}

const Star = styled.button`
  padding: 2px;
  cursor: pointer;
  width: 14%;
  display: inline-block;

  &:hover {
    color: goldenrod;
  }
`
