const getBabelRelayPlugin = require('babel-relay-plugin')
const schema = require('../data/graphql/schema.json')

module.exports = getBabelRelayPlugin(schema.data)
