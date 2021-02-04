const { update } = require('../config/orm');
const orm = require('../config/orm');

const burger = {
    getAll: function(cb){
        orm.getAll('burgers', cb);
    },
    create: function(burger, cb){
        orm.create('burgers', 'burger_name', burger, cb);
    },
    update: function(burgerId, bool, cb){
        orm.update('burgers', 'eaten', bool, "id", burgerId, cb)
    }
};

module.exports = burger;