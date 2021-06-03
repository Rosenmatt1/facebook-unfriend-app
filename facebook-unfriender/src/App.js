// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:  

  const appID = '223211789310003'
  const clientToken = '9e816bf70b56267e494035c385c74fdc'
  const { FB_SECRET } = process.env

  // let url = "https://graph.facebook.com/oauth/access_token?client_id={your-app-id}&client_secret={your-app-secret}&grant_type=client_credentials"
  let url = 'https://jsonplaceholder.typicode.com/todos/1'

  //opens a dialogue box
  // FB.ui({
  //   method: 'share',
  //   href: 'https://developers.facebook.com/docs/'
  // }, function(response){});

  useEffect(() => {
    async function fetchAPI() {
      let response = await fetch(url)
      response = await response.json()
      console.log(response)
    }

    fetchAPI()

    FB.getLoginStatus(function (response) {
      console.log("ran loginStatusFunction")
      if (response.status === 'connected') {
        var accessToken = response.authResponse.accessToken;
      }
    });

    FB.login(function (response) {
      console.log("ran FBLogin")
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function (response) {
          console.log('Good to see you, ' + response.name + '.');
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });

    /* make the API call */
    FB.api(
      "?id=https://www.facebook.com",
      {
        "fields": "engagement"
      },
      function (response) {
        if (response && !response.error) {
          /* handle the result */
          console.log(response)
        }
      }
    );

  }, []);

  return (
    <div className="App">

      Facebook Unfriender

      {/* <fb:login-button
        scope="public_profile,email"
        onlogin="checkLoginState();">
      </fb:login-button> */}

    </div>
  );
}

export default App;
