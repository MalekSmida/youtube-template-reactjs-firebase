import React from "react";

// node modules
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// local files
import { Header, Sidebar } from "./components";
import { VideoSection, Search } from "./pages";
import "./App.scss";

/**
 * render main page and search page
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
