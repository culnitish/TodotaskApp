const {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
} = require('graphql');

const DeleteTodo = new GraphQLInputObjectType({
    name: 'DeleteTodo',
    description: 'Deletes a task ',
    fields: () => ({
        todoid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'ID'
        }
    })
});

module.exports = DeleteTodo