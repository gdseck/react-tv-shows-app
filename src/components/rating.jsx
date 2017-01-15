import React from 'react'
import styled from 'styled-components'
import {Icon} from 'react-fa'

export default class Rating extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hoverRating: null,
      color: 'black',
      loading: this.props.updatingRating
    }
  }

  render () {
    const {rating} = this.props.show
    const {hoverRating} = this.props

    const renderStars = () => {
      if (this.props.updatingRating) {
        return (
          <Icon name='spinner' spin />
        )
      }

      return [1, 2, 3, 4, 5].map(score => {
        return (
          <Star
            key={score}
            value={score}
            rating={rating}
            hoverRating={hoverRating}
            onClick={(e) => this.props.handleRatingClick(e, score)}
            onMouseIn={() => this.setState({hoverRating: score})}
            onMouseOut={() => this.setState({hoverRating: null})}
            color={rating && rating >= score ? 'goldenrod' : 'white'}
          >
            <Icon name='star' />
          </Star>
        )
      })
    }

    return (
      <div style={{textAlign: 'center'}}>
        {renderStars()}
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
