import React from 'react'
import Relay from 'react-relay'
import styled from 'styled-components'
import {withRouter} from 'react-router'
import UpdateRatingMutation from 'src/mutations/update-rating'

import Show from './show.jsx'
import ShowBanner from './show-banner.jsx'
import {StyledImage} from './show'
import {Icon} from 'react-fa'

const ShowWithRouter = withRouter(Show)

class SeriesList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      updatingRating: false,
      highlightedShow: {}
    }
    this.loadMoreShows = this.loadMoreShows.bind(this)
    this.onChangeFilter = debounce(this.onChangeFilter.bind(this), 300)
    this.handleRatingClick = this.handleRatingClick.bind(this)
    this.highlightShow = this.highlightShow.bind(this)
  }

  loadMoreShows () {
    const {relay} = this.props
    relay.setVariables({number: relay.variables.number + 20})
  }

  handleRatingClick (e, rating, showId) {
    e.stopPropagation()

    const {relay, viewer} = this.props

    const mutation = new UpdateRatingMutation({
      viewer,
      showId,
      rating
    })
    this.setState({updateingRating: true},
      () => relay.commitUpdate(mutation, {
        onSuccess: (transaction) => {
          this.setState({updatingRating: false})
          console.log('mutation success', transaction)
        },
        onFailure: (transaction) => {
          this.setState({updatingRating: false})
          console.log('mutation failed', transaction.getError())
        }
      })
    )
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

  highlightShow = (show) => {
    this.setState(() => {
      return {
        highlightedShow: show
      }
    })
  }

  render () {
    const shows = this.props.viewer.shows ? this.props.viewer.shows.edges.map(edge => edge.node) : null
    const {highlightedShow} = this.state

    const renderLoadMoreButton = () => {
      return this.props.viewer.shows.pageInfo.hasNextPage
        ? <button onClick={this.loadMoreShows}>Load more</button>
        : null
    }

    return (
      <PageContainer>
        <div>
          <SearchField type='text' placeholder='Search title, year, creator...' onChange={(e) => this.onChangeFilter(e.target.value)} />
        </div>
        <SelectedShow>
          {
            Object.keys(highlightedShow).length !== 0
              ? <ShowBanner highlightedShow={highlightedShow} />
              : null
          }
        </SelectedShow>
        <ShowsContainer>
          {shows.map((show, index) =>
            <ShowWithRouter
              show={show}
              key={show.id}
              handleRatingClick={this.handleRatingClick}
              updatingRating={this.state.updatingRating}
              highlightShow={this.highlightShow}
            />
          )}
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
              rating
            }
          }
          pageInfo {
            hasNextPage
          }
        }
        ${UpdateRatingMutation.getFragment('viewer')}
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
  // width: 100%;
  height: calc(100vh - 10em);
  margin: auto;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 2em;
  flex: 1 1 auto;
  max-width: 55rem;
  background: #000;
  margin-top: 2rem;
  margin-bottom: 2rem;
  overflow: hidden;
  box-shadow: inset 0 0 5px gray;
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
  margin-bottom: 1rem;

  &:focus {
    border: none;
    outline: none;
    border-bottom: solid 2px #969696;
  }
`

const SelectedShow = styled.div`
  background: white;
  color: black;
  width: 100%;
  height: 12rem;
  border: 1px solid gray;
  border-radius: 3px;
  box-shadow: 3px 3px 12px -1px grey;
  margin-bottom: 1rem;
`

const PageTitle = styled.h1`
  text-align: center;
  font-size: 3em;
  margin: 0.2em;
`

const ShowsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 68%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: space-between;
  overflow: auto;
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
