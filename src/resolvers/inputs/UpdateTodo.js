const {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
} = require('graphql');

const UpdateTodo = new GraphQLInputObjectType({
    name: 'UpdateTodo',
    description: 'Update a task ',
    fields: () => ({
        todoid: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'ID'
        },
        taskname: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'taskname'
        },
        description: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'description'
        },
        iscompleted: {
            type: new GraphQLNonNull(GraphQLBoolean),
            description: 'status'
        }
    })
});

module.exports = UpdateTodo