// import 'core-js/es6/map';
// import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import bridge from '@vkontakte/vk-bridge';
import axios from 'axios';
import registerServiceWorker from './sw';
import { getValue } from './launchParams';

var correctUser = false;
axios.post('https://appsec.vercel.app/api', {
    url: window.location.search,
}).then(function(responce) {
  if (responce == 'success') {
    var correctUser = true;
  } else {
    var correctUser = false;
  }

}).catch(function (error) {
    correctUser = false;
    console.log('Ошибка авторизации: ' + error);
});

if ( correctUser ) {

  if (getValue(window.location.search, "vk_is_app_user") == 0) {

    alert("Регистрируем...");

  } else {

    alert("Авторизация.");
  }

}



// Init VK App
connect.send('VKWebAppInit', {});

// Service Worker For Cache
// registerServiceWorker();
