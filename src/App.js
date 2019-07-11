import React from "react";
import { Nav } from "./components/Nav";
import { About } from "./components/About";
import { Shop } from "./components/Shop";
import { Details } from "./components/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

const Megatron = { width: "35vw" };

const Home = () => {
  return (
    <div>
      <h1>FORTNITE</h1>
      <h2>Battle Royale</h2>
      <img
        style={Megatron}
        alt="Fortnite megatron"
        src="https://uploads.codesandbox.io/uploads/user/2b050b8e-9dee-419a-b433-b32c946d159f/_OxI-8Jv1AAzJ0FRKzBnz7SKwfuKy7.png"
      />
    </div>
  );
};
export default App;
