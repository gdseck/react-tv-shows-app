import React from 'react'
import Relay from 'react-relay'

class SeriesList extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render () {
    return (
      <h1>Series list</h1>
    )
  }
}

export default Relay.createContainer(SeriesList, {
  initialVariables: {
    filter: ''
  },
  fragments: {
    seriesList: () => Relay.QL`
      fragment on SeriesList {
        id
        series (first: 10, filter: $filter){
          edges {
            node {
              id
              title
              year
              creators
            }
          }
        }
      }
    `
  }
})
