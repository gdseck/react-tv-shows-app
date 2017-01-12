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
      resolve: (obj) => { console.log(obj.image); return 'fawlty-towers.jpg' }
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
      resolve: (_, args) => {return Show.findOne({_id: args.id}).then(item => {
        console.log(item)
        console.log(item.image)
        return item
      })}
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
      resolve: () => viewer
    }
  })
})

const schema = new GraphQLSchema({
  query: Root
})

export default schema
