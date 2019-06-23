import mysql from 'mysql'
import dotenv from 'dotenv'

const dotEnvConfig = dotenv.config()
if (dotEnvConfig.error) {
  throw dotEnvConfig.error
}

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
})

// sql qureies
let createUsers = `create table if not exists users(
                          id int primary key auto_increment,
                          username varchar(255)not null,
                          password varchar(255)not null,
                          role varchar(255)not null
                      )`
let createOneUser =
  "INSERT INTO `users`(`id`, `username`, `password`, `role`) VALUES (NULL,'admin','admin','Adm')"
let countUsers = `SELECT count(*) AS t FROM users`

connection.connect(function (err) {
  if (err) throw err

  connection.query(createUsers, function (err, results, fields) {
    if (err) {
      console.log(err.message)
    }
    connection.query(createOneUser, function (err, results, fields) {
      if (err) {
        console.log(err.message)
      }
    })
  })

  connection.query(countUsers, function (err, results, fields) {
    if (err) {
      console.log(err.message)
    }
    let dataExist = results[0].t
    if (dataExist === 0) {
      connection.query(createOneUser, function (err, results, fields) {
        if (err) {
          console.log(err.message)
        }
      })
    }
  })
})

export default connection
