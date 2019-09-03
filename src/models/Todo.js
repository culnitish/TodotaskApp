const {
    Model
} = require('objection')
let timestampPlugin = require('objection-timestamps').timestampPlugin;

class Todo extends timestampPlugin()(Model) {

    static get tableName() {
        return 'todo';
    }

    static get idColumn() {
        return 'todoid';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['todoId'],

            properties: {
                todoid: {
                    type: 'number'
                },
                taskname: {
                    type: 'string'
                },
                description: {
                    type: 'string'
                },
                iscompleted: {
                    type: 'boolean'
                },
                createdat: {
                    type: 'string'
                },
                updatedat: {
                    type: 'string'
                }
            }
        };
    }

    $beforeInsert() {
        this.createdat = new Date().toISOString();
    }

    $beforeUpdate() {
        this.updatedat = new Date().toISOString();
    }

}

module.exports = Todo