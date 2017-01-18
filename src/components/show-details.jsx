import React from 'react'
import Relay from 'react-relay'

import {StyledImage} from './show'

class ShowDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      image: require('public/img/notfound.png'),
      hasImage: false
    }
    console.log('-- constructor', props.viewer)
  }

  componentDidMount () {
    try {
      console.log('image', this.props.viewer.show.image)
      const image = require(`public/img/${this.props.viewer.show.image}`)
      console.log(image)
      this.setState({
        image: image,
        hasImage: true
      })
    } catch (err) {
      console.log(err)
      this.setState({
        image: require('public/img/notfound.png'),
        hasImage: false
      })
    }
  }

  render () {
    console.log('--render', this.props.viewer)
    const {show} = this.props.viewer
    const {hasImage, image} = this.state
    return (
      <div>
        <h1> Show Details </h1>
        <StyledImage
          hasImage={hasImage}
          src={this.state.image}
        />
        <ul>
          <li key='1'>{show.title}</li>
          <li key='2'>{show.year}</li>
          <li key='3'>{show.creators.map((creator, index) => <div key={index}>{creator}</div>)}</li>
        </ul>
      </div>
    )
  }
}

export default Relay.createContainer(ShowDetails, {
  initialVariables: {
    showId: null
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        show (id: $showId) {
          id
          _id
          title
          year
          creators
          image
        }
      }
    `
  }
})
