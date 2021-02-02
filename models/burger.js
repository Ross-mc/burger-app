const { update } = require('../config/orm');
const orm = require('../config/orm');

const burger = {
    getAll: function(cb){
        orm.getAll('burgers', cb);
    },

    create: function(burger, cb){
        orm.create('burgers', 'burger_name', burger, cb);
    },

    update: function(burger, cb){
        orm.update('burgers', 'eaten', true, "burger_name", burger)
    }
};

module.exports = burger;