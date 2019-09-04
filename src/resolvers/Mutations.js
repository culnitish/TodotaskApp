const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt
} = require('graphql');

const Todo = require("../models/Todo");
const InputTodo = require('./inputs/InputTodo');
const UpdateTodo = require('./inputs/UpdateTodo');
const TodoOutput = require('./outputs/OutputTodo');
const DeleteTodo = require('./inputs/DeleteTodo');

const mutations = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutations for adding task',
    fields: () => {
        return {
            createTodo: {
                description: 'Create a task ',
                type: TodoOutput,
                args: {
                    input: {
                        type: InputTodo
                    }
                },
                resolve: async(root, args) => {
                    // dt = await todayDate()
                     console.log("== ARAGS ==", args.input);
                    return await Todo.query().insert(args.input);
                }
            },
            updateTodo: {
                description: 'Update a Task',
                type: TodoOutput,
                args: {
                    input: {
                        type: UpdateTodo
                    }
                },
                resolve: async(root, args) => {
                    //console.log("== ARAGS ==", args);
                    //console.log(args.updateTodoData.todoid, args.updateTodoData)
                    // return await Todo.query().findById(args.updateTodoData.todoid).patch(args.updateTodoData)
                    return await Todo.query().patchAndFetchById(args.input.todoid, args.input);
                }
            },
            deleteTodo: {
                description: 'Delete a task',
                type: TodoOutput,
                args: {
                    input: {
                        type: DeleteTodo
                    }
                },
                resolve: async(root, args) => {
                     return await Todo.query().deleteById(args.input.todoid);
                }
            }
        }

    }


});

module.exports = mutations;