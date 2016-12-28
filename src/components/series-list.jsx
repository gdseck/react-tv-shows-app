import React from 'react'
import Relay from 'react-relay'
import styled from 'styled-components'
import {withRouter} from 'react-router'

import Show from './show.jsx'

const ShowWithRouter = withRouter(Show)

class SeriesList extends React.Component {
  render () {
    const shows = this.props.viewer.shows ? this.props.viewer.shows.edges.map(edge => edge.node) : null

    return (
      <PageContainer>
        <PageTitle>Series list</PageTitle>
        <ShowsContainer>
          {shows.map((show, index) => <ShowWithRouter show={show} key={index} />)}
        </ShowsContainer>
      </PageContainer>
    )
  }
}

export default Relay.createContainer(SeriesList, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        shows (first: 10){
          edges {
            node {
              id
              _id
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

SeriesList.propTypes = {
  viewer: React.PropTypes.object
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
