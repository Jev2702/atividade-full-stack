import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nome from './pages/Nome';
import DadosGit from './pages/DadosGit';
import Login from './pages/Login';
import Todo from './pages/Todo';
import { getToken } from './utils/Auth';



const App = () => {
  const [token, setToken] = useState("");
  const _getToken = async () => {
    const tokenString = await getToken();
    setToken( tokenString);

  };
  useEffect(() => {

    
    _getToken()
  }, [])

  if (token === null || token === undefined || token === "") {
    return (
      <>
        {console.log('token', token)}
        <Login setToken={setToken} />
      </>)
  }
  return (
    <>
      {console.log('token1', token)}
      <Router>
        <Navbar setToken={setToken} token={token} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dados' component={DadosGit} />
          <Route path='/nome' component={Nome} />
          <Route path='/todo' component={Todo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
