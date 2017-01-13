import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} from 'graphql'

import {
  globalIdField,
  fromGlobalId,
  nodeDefinitions,
  connectionDefinitions,
  connectionArgs,
  mutationWithClientMutationId,
  cursorForObjectInConnection
} from 'graphql-relay'

import {connectionFromMongooseQuery} from 'relay-mongodb-connection'

import {Show, User} from '../models/series-schema'

class Viewer {}
const viewer = new Viewer()
viewer.id = 1

const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    const {type, id} = fromGlobalId(globalId)

    if (type === 'Show') {
      return Show.find({id: id})
    } else if (type === 'User') {
      return viewer
    }

    return null
  },
  (obj) => {
    if (obj instanceof Show) {
      return ShowType
    }

    if (obj instanceof Viewer) {
      return UserType
    }

    return null
  }
)

const ShowType = new GraphQLObjectType({
  name: 'Show',
  description: 'A TV-show',
  fields: {
    id: globalIdField('Show', show => show._id),
    _id: {
      type: GraphQLString,
      description: 'mongodb object id'
    },
    title: {
      type: GraphQLString,
      description: 'Title of the series'
    },
    year: {
      type: GraphQLString,
      description: 'Year the series was released'
    },
    creators: {
      type: new GraphQLList(GraphQLString),
      description: 'List of creators/writers of the series'
    },
    image: {
      type: GraphQLString,
      description: 'Show poster',
      resolve: (obj) => obj.image
    }
  },
  interfaces: [nodeInterface]
})

const {
  connectionType: ShowsConnection,
  edgeType: ShowEdge
} = connectionDefinitions({
  name: 'Show',
  nodeType: ShowType
})

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: globalIdField('User'),
    shows: {
      type: ShowsConnection,
      args: Object.assign({}, connectionArgs, {
        filter: {
          type: GraphQLString
        }
      }),
      resolve: (_, args) => {
        if (args.filter) {
          const re = new RegExp(args.filter, 'i')
          return connectionFromMongooseQuery(
            Show.find({ $or: [
              { title: re },
              { year: re },
              { creators: { $in: [re] } }
            ]})
          )
        }

        return connectionFromMongooseQuery(
          Show.find({}),
          args
        )
      }
    },
    show: {
      type: ShowType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (_, args) => {
        return Show.findOne({
          _id: args.id
        }).then(item => {
          return item
        })
      }
    }
  },
  interfaces: [nodeInterface]
})

const UpdateRatingMutation = mutationWithClientMutationId({
  name: 'UpdateRating',
  inputFields: {
    viewerId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    showId: {
      type: GraphQLString
    },
    rating: {
      type: GraphQLInt
    }
  },

  outputFields: {
    showEdge: {
      type: ShowEdge,
      resolve: ({showId}) => {
        console.log(showId)
        const show = Show.findOne({_id: showId}).then(show => show)
        console.log(show)
        return {
          cursor: cursorForObjectInConnection(Show.find({}), show),
          node: show
        }
      }
    },
    viewer: {
      type: UserType,
      resolve: () => viewer
    }
  },

  mutateAndGetPayload: ({showId, rating}) => {
    console.log(showId, rating)
    Show.update(
      {_id: showId},
      {$set: {rating: rating}},
      {upsert: true}
    ).then(show => {
      console.log(show)
    })
    Show.find({_id: showId}).then(item => console.log(item))
    return {showId}
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    node: nodeField,
    viewer: {
      type: UserType,
      resolve: () => viewer
    }
  })
})

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: () => ({
    updateRating: UpdateRatingMutation
  })
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})

export default schema
