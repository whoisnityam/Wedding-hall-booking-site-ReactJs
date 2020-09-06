import React from 'react';
import './App.css';
import Home from './pages/Home';
import Venue from './pages/Venue';
import Caterers from './pages/Caterers';
import Halls from './pages/Halls';
import Error from './pages/Error';
import Navbar from './components/Navbar' 
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
     <>
    
     <Navbar></Navbar>
    <Switch> 
     <Route exact path= "/" component={Home}/>
     <Route exact path= "/Venues" component={Venue}/>
     <Route exact path= "/Caterers" component={Caterers}/>
     <Route exact path="/Venues/:Hall" component={Halls}/>
     <Route component={Error}/>
     
    </Switch>
    
     </>
  );
}

export default App;
