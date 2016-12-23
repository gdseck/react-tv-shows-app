import React from 'react'
import Relay from 'react-relay'
import styled from 'styled-components'

import Show from './show.jsx'

class SeriesList extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render () {
    const series = this.props.seriesList.series.edges.map(edge => edge.node)
    return (
      <PageContainer>
        <PageTitle>Series list</PageTitle>
        <ShowsContainer>
          {series.map((show, index) => <Show show={show} key={index}/>)}
        </ShowsContainer>
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
        series (first: 50, filter: $filter){
          edges {
            node {
              id
              title
              year
              creators
            }
          }
        }
      },
      fragment on Series {
        id
        title
        year
        creators
      }
    `
  }
})

SeriesList.propTypes = {
  seriesList: React.PropTypes.object
}

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 4.1em);
  margin: auto;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 2em;
  flex: 1 1 auto;
  max-width: 80%;
  background: white;
`

const PageTitle = styled.h1`
  text-align: center;
  font-size: 3em;
  margin: 0.2em;
`

const ShowsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 93%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
`
