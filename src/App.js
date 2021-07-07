import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Create from "./components/create/Create";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Home Component */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
