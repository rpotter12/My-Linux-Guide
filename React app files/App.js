import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Search from "./pages/Search"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
        <div className="app">
          <Router>
            <Switch>
              <Route path="/search">
                <Search />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
    );
}


export default App;
