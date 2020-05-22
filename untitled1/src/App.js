import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Navigation} from "./components/navigation";
import {Home} from "./home";
import {Tech} from "./tech";
import {Recipes} from "./recipes";
import {Beauty} from "./beauty";
import {Contact} from "./contact";
import {Fashion} from "./fashion";

function App() {
  return (
    <div>
        {/*navigation bar to appear everywhere*/}
        <Router>
            <Navigation/>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/beauty" component={Beauty} />
                <Route path="/fashion" component={Fashion} />
                <Route path="/tech" component={Tech} />
                <Route path="/recipes" component={Recipes} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
