import React from "react";
import "./App.css";
import Contacts from "./components/Contact/Contacts";
import Header from "./components/Layout/Header";
import { Provider } from "./Context";
import AddContact from "./components/Contact/AddContact";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import EditContact from "./components/Contact/EditContact";

const App = () => {
  return (
    <Provider>
      <Router>
        {" "}
        <div className="App">
          <Header branding="Contcat manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
