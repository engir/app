import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getValue } from './splitParams';
import { Circle } from 'react-preloaders';

function PreloaderInit() {
  const [loadingStatus, setLoading] = useState(true);

  useEffect(() => {
    axios.post('https://appsec.vercel.app/api', {
        url: window.location.search
      }).then(function(responce) {
          if(responce != null) {
            if ( getValue(window.location.search, "vk_is_app_user") == 0) {

            } else { }
          } else { }
          setLoading(false);

    }).catch(function (error) {
        console.log('[Error] Request error');
    });
  }, []);

  return (
    <React.Fragment>
      <Circle customLoading={loadingStatus} />
    </React.Fragment>
  );
}

export default PreloaderInit;
