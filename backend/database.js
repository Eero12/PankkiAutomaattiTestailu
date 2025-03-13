const { connect } = require("./routes");

const mysql = require('mysql2');
const ConnectionString='mysql://bankuser:kala123@127.0.0.1:3306/testbankdb';

//pitää päästä ulkopuoelelta käsiksi
const connection = mysql.createPool(ConnectionString);

module.exports = connection;