import {
  GraphQLObjectType,
  GraphQLString,
  // GraphQLInt,
  GraphQLList,
  GraphQLSchema
} from 'graphql'

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  // cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  // mutationWithClientMutationId,
  nodeDefinitions
} from 'graphql-relay'

import {
  getSeries,
  getSeriesList,
  SeriesList
} from './database'

const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    const {type, id} = fromGlobalId(globalId)
    console.log('NodeDefinitions (globalId), id:', id)
    if (type === 'SeriesList') {
      return getSeriesList()
    }
    return null
  },
  (obj) => {
    if (obj instanceof SeriesList) {
      return seriesListType
    }
    return null
  }
)

const seriesType = new GraphQLObjectType({
  name: 'Series',
  description: 'A TV-series',
  fields: () => ({
    id: globalIdField('Series'),
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
  }),
  interfaces: [nodeInterface]
})

const seriesListType = new GraphQLObjectType({
  name: 'SeriesList',
  description: 'List of series',
  fields: () => ({
    id: globalIdField('SeriesList'),
    series: {
      type: seriesConnection,
      description: 'List of series',
      args: Object.assign({}, connectionArgs, {
        filter: {
          type: GraphQLString
        }
      }),
      resolve: (_, args) => connectionFromArray(getSeries(args.filter), args)
    }
  }),
  interfaces: [nodeInterface]
})

const {connectionType: seriesConnection} = connectionDefinitions({
  name: 'Series',
  nodeType: seriesType
})

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    seriesList: {
      type: seriesListType,
      resolve: () => getSeriesList()
    }
  })
})

export default new GraphQLSchema({
  query: queryType
})
