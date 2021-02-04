const { update } = require('../config/orm');
const orm = require('../config/orm');

const burger = {
    getAll: function(cb){
        orm.getAll('burgers', cb);
    },
    create: function(burger, cb){
        orm.create('burgers', 'burger_name', burger, cb);
    },
    update: function(burgerId, cb){
        orm.update('burgers', 'eaten', true, "id", burgerId)
    }
};

module.exports = burger;