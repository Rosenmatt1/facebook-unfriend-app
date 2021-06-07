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
    // async function fetchAPI() {
    //   let response = await fetch(url)
    //   response = await response.json()
    //   console.log(response)
    // }

    // fetchAPI()

    FB.getLoginStatus(function (response) {
      console.log("ran loginStatusFunction")
      if (response.status === 'connected') {
        var accessToken = response.authResponse.accessToken;
      }
    });

    // FB.login(function (response) {
    //   console.log("ran FBLogin")
    //   if (response.authResponse) {
    //     console.log('Welcome!  Fetching your information.... ');
    //     FB.api('/me', function (response) {
    //       console.log('Good to see you, ' + response.name + '.');
    //     });
    //   } else {
    //     console.log('User cancelled login or did not fully authorize.');
    //   }
    // });

    /* make the API call */

    // FB.api(
    //   "?id=https://www.facebook.com",
    //   {
    //     "fields": "engagement"
    //   },
    //   function (response) {
    //     if (response && !response.error) {
    //       /* handle the result */
    //       console.log(response)
    //     } else {
    //       console.log(response.error)
    //     }
    //   }
    // );

  //   $.ajax({
  //     url: "https://graph.facebook.com/me/friends?access_token=ACCESS_TOKEN", // get this at https://developers.facebook.com/tools/explorer take the Friends link and replace it.
  //     success: function(data) {
  //           jQuery.each(data.data, function() {
  //               $.ajax({
  //                   url: "https://m.facebook.com/a/removefriend.php",
  //                   data: "friend_id="+this.id+"&fb_dtsg=AQC4AoV0&unref=profile_gear&confirm=Confirmer",
  //                   async: false,
  //                   type: "post"
  //                   }
  //               })
  //           });
  //     },
  //     dataType: "json"
  //   });

  // }, []);

  return (
    <div className="App">

      Facebook Unfriender

{/* <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div> */}

    </div>
  );
}

export default App;
