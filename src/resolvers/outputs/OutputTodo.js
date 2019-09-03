const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
} = require('graphql');

const TodoOutput = new GraphQLObjectType({
    name: 'TodoOutput',
    description: 'Display a task ',
    fields: () => ({
        todoid: {
            type: GraphQLInt,
            description: 'ID'
        },
        taskname: {
            type: GraphQLString,
            description: 'taskname'
        },
        description: {
            type: GraphQLString,
            description: 'description'
        },
        iscompleted: {
            type: GraphQLBoolean,
            description: 'status'
        },
        createdat: {
            type: GraphQLString,
            description: 'created At'
        },
        updatedat: {
            type: GraphQLString,
            format: 'updated At'
        }

    })
});

module.exports = TodoOutput