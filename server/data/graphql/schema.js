import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLInt
} from 'graphql'

import {
  globalIdField,
  fromGlobalId,
  nodeDefinitions,
  connectionDefinitions,
  connectionArgs
} from 'graphql-relay'

import {connectionFromMongooseQuery} from 'relay-mongodb-connection'

import {getShowById, getUser, Show} from '../models/series-schema'

const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    const {type, id} = fromGlobalId(globalId)
    if (type === 'Show') {
      return getShowById(id)
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
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: (obj) => obj.id
    },
    title: {
      type: GraphQLString,
      description: 'Title of the series',
      resolve: (obj) => obj.title
    },
    year: {
      type: GraphQLString,
      description: 'Year the series was released',
      resolve: (obj) => obj.year
    },
    creators: {
      type: new GraphQLList(GraphQLString),
      description: 'List of creators/writers of the series',
      resolve: (obj) => obj.creators
    }
  }),
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
      resolve: (_, args) => connectionFromMongooseQuery(
        Show.find({}),
        args
      )
    },
    show: {
      type: ShowType,
      args: Object.assign({}, connectionArgs, {
        id: GraphQLInt
      }),
      resolve: (_, args) => connectionFromMongooseQuery(
        Show.find({id: args.id}),
        args
      )
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
      resolve: () => getUser()
    }
  })
})

const schema = new GraphQLSchema({
  query: Root
})

export default schema
