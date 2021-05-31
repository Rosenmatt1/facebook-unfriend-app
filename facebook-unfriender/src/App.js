// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:  

  // let url = "https://graph.facebook.com/oauth/access_token?client_id={your-app-id}&client_secret={your-app-secret}&grant_type=client_credentials"
  let url = 'https://jsonplaceholder.typicode.com/todos/1'


  useEffect(() => {
    async function fetchAPI() {
      let response = await fetch(url)
      response = await response.json()
      console.log(response)
    }

    fetchAPI()

    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        var accessToken = response.authResponse.accessToken;
      }
    });

  }, []);

  return (
    <div className="App">
      Facebook Unfriender
    </div>
  );
}

export default App;
