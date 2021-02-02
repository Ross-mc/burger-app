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
    getAll: function(cb){
        const queryString = "SELECT * FROM burgers;";
        this.dbQuery(queryString, cb);
    },
    
    create: function (burger, cb){
        const queryString = `INSERT INTO burgers (burger_name) VALUES ("${burger}");`;
        this.dbQuery(queryString, cb);
    },
    update: function (burger, cb){
        const queryString = `UPDATE burgers SET eaten = true WHERE burger_name = "${burger}"`;
        this.dbQuery(queryString, cb);
    }
};

module.exports = orm;