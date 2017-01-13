import React from 'react'
import styled from 'styled-components'
import {Icon} from 'react-fa'

export default class Rating extends React.Component {
  render () {
    return (
      <div>
        {
          [1, 2, 3, 4, 5].map(score => (
            <Star key={score} value={score}><Icon name='star' /></Star>
          ))
        }
      </div>
    )
  }
}

const Star = styled.button`
  padding: 2px;
  cursor: pointer;
  width: 1.1rem;
  display: inline-block;
  border: none;
  background: inherit;

  &:hover {
    color: goldenrod;
  }
`
