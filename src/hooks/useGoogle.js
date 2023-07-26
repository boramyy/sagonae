import { useState } from 'react';
import { redirect, useNavigate } from "react-router-dom";
import useScript from 'react-script-hook';
import jwtDecode from 'jwt-decode';
import { ENV } from '../data/constants';

function useGoogle() {
  const [tokenClient, setTokenClient] = useState();
   const navigate = useNavigate();
  
  const initGoogleApiClient = async () => {
    await window.gapi.client.init({
      apiKey: ENV.GOOGLE_API_KEY,
      discoveryDocs: [ENV.GOOGLE_DISCOVERY_DOC],
    });
  }

  const initGoogleApi = () => {
    window.gapi.load('client', initGoogleApiClient);
  }
  
  const initGoogleOauth2 = () => {
    const token = window.google.accounts.oauth2.initTokenClient({
      client_id: ENV.GOOGLE_CLIENT_ID,
      scope: ENV.GOOGLE_SCOPE,
      callback: (res) => {
        console.log('res', res);
        console.log('res', res.access_token);

        // TODO: access_token 으로 아래 api 호출해보기
        // https://www.googleapis.com/auth/userinfo.email	
        
        if (res.error !== undefined) {
          throw (res);
        }
      }, // defined later
    });
    setTokenClient(token);
    initGoogleIdService(token);
  }
  
  const initGoogleIdService = (token) => {
    console.log('initGoogleIdService')
    window.google.accounts.id.initialize({
      client_id: ENV.GOOGLE_CLIENT_ID,
      callback: null,
      // callback: (res) => {
      //   console.log('id res', res)
      //   console.log('jwt', jwtDecode(res.credential))
      //   console.log('tokenClient', token);
      //   // token.requestAccessToken({ prompt: 'consent' });
      //   navigate('/');
      //   // redirect('/');
      // },
    });
    // window.google.accounts.id.prompt();
    // console.log('initGoogleIdService token', token);
  }

  const [loadingGapi, errorGapi] = useScript({
    src: 'https://apis.google.com/js/api.js',
    onload: initGoogleApi,
  });
  // if (loadingGapi) { console.log('loading! gapi 1'); }
  // if (errorGapi) { console.log('error! gapi'); }
  
  const [loadingGsi, errorGsi] = useScript({
    src: 'https://accounts.google.com/gsi/client',
    onload: initGoogleOauth2,
  });
  // if (loadingGsi) { console.log('loading! gsi 1') }
  // if (errorGsi) { console.log('error! gsi'); }

  return [tokenClient];
};

export default useGoogle;