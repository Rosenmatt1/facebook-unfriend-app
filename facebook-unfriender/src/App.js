// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  // const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:  

  let url =  "https://graph.facebook.com/oauth/access_token?client_id={your-app-id}&client_secret={your-app-secret}&grant_type=client_credentials"
 
  
  useEffect(() => {    
     console.log("app")

     const response = await fetch(url)
     const json = await response.json()
     let addCurrent = json.map(card => {
       card.current = false
       return card
     })
    //  this.setState({ flashcards: addCurrent })

     }, []);



  return (
    <div className="App">

      Facebook Unfriender
    </div>
  );
}

export default App;
