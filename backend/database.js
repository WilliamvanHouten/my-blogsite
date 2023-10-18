import mysql from 'mysql';

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Liam1997#",
    database:"blog"
})