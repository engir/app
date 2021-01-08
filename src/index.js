// import 'core-js/es6/map';
// import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import bridge from '@vkontakte/vk-bridge';
import axios from 'axios';
import registerServiceWorker from './sw';
import { verifyLaunchParams } from './launchParams';

function getValue(array, keyName) {
  return array.filter(el => el.key === keyName)[0].value
}

const launchParams = window.location.search.slice(1);
const userStatus = verifyLaunchParams(launchParams, "6O1XitpFwXIGtHaxvdD3");
if (userStatus != 0)  {

  if (getValue(userStatus, "vk_is_app_user") == 1) {
    ReactDOM.render(
      <h1> Вы являетесь пользователем приложения. Ожидайте аутентификации. </h1>,
      document.getElementById('root')
    );

    const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://AppUser:XbB1620@cluster0.7srov.mongodb.net/app?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

  } else {
    alert("Регистрация недоступна.")
  }

}











// Init VK App
connect.send('VKWebAppInit', {});

// Service Worker For Cache
// registerServiceWorker();
