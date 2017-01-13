import React from 'react'
import Relay from 'react-relay'
import styled from 'styled-components'
import {withRouter} from 'react-router'

import Show from './show.jsx'

const ShowWithRouter = withRouter(Show)

class SeriesList extends React.Component {
  constructor (props) {
    super(props)
    this.loadMoreShows = this.loadMoreShows.bind(this)
    this.onChangeFilter = debounce(this.onChangeFilter.bind(this), 300)
    console.log('-- list', this.props.viewer)
  }

  loadMoreShows () {
    const {relay} = this.props
    relay.setVariables({number: relay.variables.number + 20})
  }

  onChangeFilter (value) {
    const {relay} = this.props

    relay.setVariables({
      filter: value,
      number: 20
    }, (success) => {
      console.log(success)
    })
  }

  render () {
    const shows = this.props.viewer.shows ? this.props.viewer.shows.edges.map(edge => edge.node) : null

    const renderLoadMoreButton = () => {
      return this.props.viewer.shows.pageInfo.hasNextPage
        ? <button onClick={this.loadMoreShows}>Load more</button>
        : null
    }

    return (
      <PageContainer>
        <PageTitle>Series list</PageTitle>
        <div>
          <SearchField type='text' placeholder='Search title, year, creator...' onChange={(e) => this.onChangeFilter(e.target.value)} />
        </div>
        <ShowsContainer>
          {shows.map((show, index) => <ShowWithRouter show={show} key={show.id} />)}
        </ShowsContainer>
        <div>
          {renderLoadMoreButton()}
        </div>
      </PageContainer>
    )
  }
}

export default Relay.createContainer(SeriesList, {
  initialVariables: {
    number: 20,
    filter: ''
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        shows (first: $number, filter: $filter){
          edges {
            node {
              id
              _id
              title
              year
              creators
              image
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `
  }
})

SeriesList.propTypes = {
  viewer: React.PropTypes.object,
  relay: React.PropTypes.object
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

const SearchField = styled.input`
  display: block;
  width: 100%;
  line-height: 2rem;
  font-size: 2rem;
  margin: 0;
  appearance: none;
  box-shadow: none;
  border-radius: none;
  padding: 10px;
  border: none;
  border-bottom: solid 2px #c9c9c9;
  transition: border 0.3s;

  &:focus {
    border: none;
    outline: none;
    border-bottom: solid 2px #969696;
  }
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
  justify-content: space-between;
  align-items: flex-start;
  align-content: space-between;
`
function debounce (func, wait, immediate) {
  var timeout
  return function () {
    var context = this
    var args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
