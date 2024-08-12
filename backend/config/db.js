import mysql from "mysql2";

export const mySqlConnection = mysql.createConnection({
    host: 'sql12.freesqldatabase.com', // Host address
    user: 'sql12725555',               // Database user
    password: 'CJsrjBQjUA',            // Database password
    database: 'sql12725555',           // Database name
    port: 3306
})

