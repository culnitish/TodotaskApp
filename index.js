const {
    GraphQLServer
} = require('graphql-yoga')

require('dotenv').config();

const Knex = require('knex')
const connection = require('./knexfile')
const { Model } = require('objection')
const knexConnection = Knex(connection.default)
Model.knex(knexConnection)

const schema = require('./schema');

const server = new GraphQLServer({
    schema
})

const options = {
    port: process.env.DAL_PORT,
    endpoint: process.env.DAL_ENDPOINT
}

server.start(options, ({
        port,
        endpoint
    }) =>
    console.log(
        `Server started, will accept requests on port ${port}${endpoint}.`,
    ),
)