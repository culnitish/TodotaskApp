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

const mutations = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutations for adding task',
    fields: () => {
        return {
            createTodo: {
                description: 'Create a task ',
                type: TodoOutput,
                args: {
                    inputTodoData: {
                        type: InputTodo
                    }
                },
                resolve: async(root, args) => {
                    // dt = await todayDate()
                    // console.log("== ARAGS ==", args);
                    return await Todo.query().insert(args.inputTodoData);
                }
            },
            updateTodo: {
                description: 'Update a Task',
                type: TodoOutput,
                args: {
                    updateTodoData: {
                        type: UpdateTodo
                    }
                },
                resolve: async(root, args) => {
                    //console.log("== ARAGS ==", args);
                    //console.log(args.updateTodoData.todoid, args.updateTodoData)
                    // return await Todo.query().findById(args.updateTodoData.todoid).patch(args.updateTodoData)
                    return await Todo.query().patchAndFetchById(args.updateTodoData.todoid, args.updateTodoData);
                }
            },
            deleteTodo: {
                description: 'Delete a task',
                type: TodoOutput,
                args: {
                    todoid: {
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve: async(root, args) => {
                    const findId = await Todo.query().findById(args.todoid);
                    console.log(findId instanceof Todo);
                    if (!findId instanceof Todo) {
                        throw new error("Error deleting , ID not Found")
                    } else
                        return await Todo.query().deleteById(args.todoid);
                }
            }
        }

    }


});

module.exports = mutations;