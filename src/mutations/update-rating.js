import Relay from 'react-relay'

export default class UpdateRatingMutation extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL`
      fragment on User {
        id
      }
    `
  }

  getMutation () {
    return Relay.QL`mutation {
      updateRating
    }`
  }

  getVariables () {
    const {viewer, showId, rating} = this.props
    return {
      viewerId: viewer.id,
      showId,
      rating
    }
  }

  getFatQuery () {
    return Relay.QL`
      fragment on UpdateRatingPayload {
        viewer {
          id
          shows (first:20){
            edges {
              node {
                rating
              }
            }
          }
        }
        showEdge {
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
      }
    `
  }

  getConfigs () {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        viewer: this.props.viewer.id
      }
    }]
  }
}
