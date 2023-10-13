import React from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import Product from './Product';

function App() {

  
useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);
  return (
   <div className='app'>
    <Header/>
    <Home/>
    <Product/>
   </div>
    
  );
  
}

export default App;
