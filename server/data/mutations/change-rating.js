import Relay from 'react-relay'

export default class ChangeRatingMutation extends Relay.Mutation {
  getMutation () {
    return Relay.QL`mutation {
      changeRating
    }`
  }

  getVariables () {
    const {viewer, show} = this.props
    return Object.assign({}, show, {
      viewerId: viewer.id
    })
  }

  getFatQuery () {
    return Relay.QL`
      fragment on ChangeRatingPayload {
        viewer {
          shows
        }
      }
      edge {
        node {
          title
          year
          creators
        }
      }
    `
  }

  getConfigs () {
    return [{
      type: 'FIELDS_CHANGE',
      parentName: 'viewer',
      parentID: this.props.viewer.id
    }]
  }
}
