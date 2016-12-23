import React from 'react'
import Relay from 'react-relay'

class ShowDetails extends React.Component {
  render () {
    return (
      <div>
        <h1> Show Details </h1>
        {renderShowDetails(props)}
      </div>
    )
  }
}

const renderShowDetails = (props) => {
  if (!props.viewer) return null

  console.log()
  return <div>Data received</div>
}

export default Relay.createContainer(ShowDetails, {
  initialVariables: {
    showId: null
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        show(id: $showId) {
          id
          title
          year
          creators
        }
      }
    `
  }
})
