import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const bizSdk = require('facebook-nodejs-business-sdk');

// const accessToken = '{access-token}';
// const accountId = 'act_{{adaccount-id}}';

// const FacebookAdsApi = bizSdk.FacebookAdsApi.init(accessToken);
// const AdAccount = bizSdk.AdAccount;
// const Campaign = bizSdk.Campaign;

// const account = new AdAccount(accountId);
// var campaigns;
    
// account.read([AdAccount.Fields.name])
//   .then((account) =>{
//     return account.getCampaigns([Campaign.Fields.name], { limit: 10 }) // fields array and params
//   })
//   .then((result) =>{
//     campaigns = result
//     campaigns.forEach((campaign) =>console.log(campaign.name))  
//   }).catch(console.error);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
