import Relay from 'react-relay'

export default class ChangeRatingMutation extends Relay.Mutation {
  getMutation () {
    return Relay.QL`mutation {
      updateRating
    }`
  }

  getVariables () {
    const {viewer, showId, rating} = this.props
    return {
      viewerId: viewer.__dataID__,
      showId,
      rating
    }
  }

  getFatQuery () {
    return Relay.QL`
      fragment on UpdateRatingPayload {
        viewer {
          id
        }
        showEdge {
          node {
            id
            _id
            title
            year
            creators
            image
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
