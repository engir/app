// import 'core-js/es6/map';
// import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import mysql from 'mysql2';
import App from './App';
import registerServiceWorker from './sw';


const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "usersdb",
  password: "пароль_от_сервера"
});
connection.connect();

// Init VK App
connect.send('VKWebAppInit', {});

// Service Worker For Cache
registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
