import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navigation/Navbar/Navbar';
import {React,useEffect} from 'react';
import axios from 'axios';
import Aux from './HOC/Auxiliary/Auxiliary';
import {Route,Switch} from 'react-router-dom';

function App() {
useEffect(() => {
  axios
    .get(
      "https://api.themoviedb.org/3/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=28"
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

  return (
    <div className="App">

      <Aux>
        <Navbar />
      </Aux>
    </div>
  );
	
}

export default App;
