import React from 'react'
import styled from 'styled-components'
import {Icon} from 'react-fa'

export default class Rating extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hoverRating: null,
      color: 'black'
    }
  }

  render () {
    const {rating} = this.props.show
    const {hoverRating} = this.props

    return (
      <div style={{textAlign: 'center'}}>
        {
          [1, 2, 3, 4, 5].map(score => {
            return (
              <Star
                key={score}
                value={score}
                rating={rating}
                hoverRating={hoverRating}
                onClick={(e) => this.props.handleRatingClick(e, score)}
                onMouseIn={() => this.setState({hoverRating: score})}
                onMouseOut={() => this.setState({hoverRating: null})}
                color={rating && rating >= score ? 'goldenrod' : ''}
              >
                <Icon name='star' />
              </Star>
            )
          })
        }
      </div>
    )
  }
}

// const getColor = (actualRating, hoverRating, value ) => {
//   if (!actualRating) {
//     return 'black'
//   }
//
//   if (!)
//
//   if {actual}
// }

const Star = styled.button`
  padding: 2px;
  cursor: pointer;
  width: 1.1rem;
  display: inline-block;
  border: none;
  background: inherit;
  color: ${props => props.color};

  &:hover {
    color: goldenrod;
  }
`
