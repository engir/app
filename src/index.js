// import 'core-js/es6/map';
// import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import bridge from '@vkontakte/vk-bridge';
import axios from 'axios';
import registerServiceWorker from './sw';
import PreloaderInit from './preloader';


ReactDOM.render(<PreloaderInit />,document.getElementById('root'));


// Init VK App
connect.send('VKWebAppInit', {});

// Service Worker For Cache
// registerServiceWorker();
