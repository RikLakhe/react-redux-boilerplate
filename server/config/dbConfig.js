import mysql from 'mysql';

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'testing'
});

connection.connect(function(err) {
    if (err) throw err;
});

export default connection;