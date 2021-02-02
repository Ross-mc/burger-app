const connection = require("./connection");

const orm = {
    dbQuery: (queryString, cb) => {
        connection.query(queryString, (err, res) => {
            if (err){
                throw err;
            }
            cb(res);
        })
    },
    getAll: function(table, cb){
        const queryString = `SELECT * FROM ${table};`;
        this.dbQuery(queryString, cb);
    },
    
    create: function (table, column,  value, cb){
        const queryString = `INSERT INTO ${table} (${column}) VALUES ("${value}");`;
        this.dbQuery(queryString, cb);
    },
    update: function (table, column, newValue, condition, conditionalCheck, cb){
        const queryString = `UPDATE ${table} SET ${column} = ${newValue} WHERE ${condition} = "${conditionalCheck}"`;
        this.dbQuery(queryString, cb);
    }
};

module.exports = orm;