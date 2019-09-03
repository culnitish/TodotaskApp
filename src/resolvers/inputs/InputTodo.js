const {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
} = require('graphql');

const InputTodo = new GraphQLInputObjectType({
    name: 'InputTodo',
    description: 'create a task ',
    fields: () => ({
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

module.exports = InputTodo