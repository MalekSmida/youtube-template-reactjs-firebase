import React from "react";

// node modules
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// local files
import { Header, Sidebar } from "./component";
import { VideoSection, Search } from "./page";
import "./App.scss";

/**
 *
 */
function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Router>
        <Header />
        <div className="app__page">
          <Sidebar />
          <Switch>
            <Route path="/search/:searchTerm">
              <Search />
            </Route>
            <Route path="/">
              <VideoSection />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
