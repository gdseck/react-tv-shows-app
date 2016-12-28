import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from 'graphql'

import {
  globalIdField,
  fromGlobalId,
  nodeDefinitions,
  connectionDefinitions,
  connectionArgs
} from 'graphql-relay'

import {connectionFromMongooseQuery} from 'relay-mongodb-connection'

import {getUser, Show, User} from '../models/series-schema'

const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    const {type, id} = fromGlobalId(globalId)

    if (type === 'Show') {
      return Show.find({id: id})
    } else if (type === 'User') {
      return getUser(id)
    }
    return null
  },
  (obj) => {
    if (obj.title) {
      return ShowType
    }

    if (obj.shows) {
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
      description: 'mongodb object id',
      resolve: (obj) => obj._id
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
    }
  },
  interfaces: [nodeInterface]
})

const {
  connectionType: ShowsConnection
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
      args: connectionArgs,
      resolve: (_, args) => {
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
      resolve: (_, args) => Show.findOne({_id: args.id})
    }
  },
  interfaces: [nodeInterface]
})

const Root = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    node: nodeField,
    viewer: {
      type: UserType,
      resolve: () => User.findOne({})
    }
  })
})

const schema = new GraphQLSchema({
  query: Root
})

export default schema
