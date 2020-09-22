import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoSection from "./components/VideoSection";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
              <SearchPage />
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
