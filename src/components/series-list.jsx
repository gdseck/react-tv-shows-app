import React from 'react'
import Relay from 'react-relay'
import styled from 'styled-components'

class SeriesList extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render () {
    return (
      <PageContainer>
        <PageTitle>Series list</PageTitle>
        <ShowContainer></ShowContainer>
      </PageContainer>
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

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 4.1em);
  margin: auto;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 2em;
  display: block;
  max-width: 80%;
  background: white;
`

const PageTitle = styled.h1`
  text-align: center;
  font-size: 3em;
  margin: 0.2em;
`

const ShowContainer = styled.div`
  background: yellow;
  position: relative;
  width: 100%;
  height: 93%;
  bottom: 0;
`
