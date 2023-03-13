import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


Amplify.configure({
    Auth: {
        region: 'ap-southeast-2',
        userPoolId: 'ap-southeast-2_YKGgidGrk',
        userPoolWebClientId: '5ku233ha0lg3ult5dj8c8dfqu7',
        mandatorySignIn: true,
        }
    });

const appSyncConfig = {
  aws_appsync_graphqlEndpoint:'https://rfupvvc3zndmxiimqrz4toim7y.appsync-api.ap-southeast-2.amazonaws.com/graphql',
  aws_appsync_region: 'ap-southeast-2',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS'
};

Amplify.configure(appSyncConfig);    

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
