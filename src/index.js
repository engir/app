// import 'core-js/es6/map';
// import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import App from './App';
import mysql2 from 'mysql2';
import db from './db'
import registerServiceWorker from './sw';

// Init VK App
connect.send('VKWebAppInit', {});

db();
// Service Worker For Cache
registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
