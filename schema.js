const graphQlBuilder = require('objection-graphql').builder;
const Todo = require('./src/models/Todo');
const mutations = require('./src/resolvers/Mutations');

// This is all you need to do to generate the schema.
const schema = graphQlBuilder()
    .model(Todo)
    .extendWithMutations(mutations)
    .build();

module.exports = schema