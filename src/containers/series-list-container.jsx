import React from 'react'
import Relay from 'react-relay'
import UpdateRatingMutation from 'src/mutations/update-rating'

import View from 'src/components/series-list'

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

    return (
      <View
        onChangeFilter={this.onChangeFilter}
        shows={shows}
        handleRatingClick={this.handleRatingClick}
        updatingRating={this.state.updatingRating}
        highlightShow={this.highlightShow}
        highlightedShow={highlightedShow}
        hasMoreShows={this.props.viewer.shows.pageInfo.hasNextPage}
        loadMoreShows={this.loadMoreShows}
      />
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
