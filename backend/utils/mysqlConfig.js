const mysql = require('mysql');

const connection = mysql.createPool({
    connectionLimit :500,
    host: 'indeed-database.c05qf1bdesu3.us-west-1.rds.amazonaws.com',
    user: 'admin',
    password: 'vogueRoots91!',
    port: 3306,
    database: 'indeedSchema',
    timezone: 'utc'
})

connection.getConnection((err) => {
    if (err) 
        throw err;
    
    else{
        console.log('MySQL connected');
    }
});

module.exports = connection;