import React from 'react'
import Relay from 'react-relay'

class ShowDetails extends React.Component {
  render () {
    const {show} = this.props.viewer
    return (
      <div>
        <h1> Show Details </h1>

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
          title
          year
          creators
        }
      }
    `
  }
})
