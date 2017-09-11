
const client = require('../../../db').client;

function addNewUser(data, callback){
    const query = `INSERT INTO user (name, email, password) values(?, ?, ?)`;
    client.execute(query, [data.name, data.email, data.password], (err, res) => {
        if(err) { return callback(err, null); }
        return callback(null, res);
    });
}

module.exports = {
    addNewUser,
}