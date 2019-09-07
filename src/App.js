import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Home from "./components/Home";
import AvengersList from "./components/AvengersList"
import AvengerPage from './components/AvengerPage';

import avengers from './components/data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    };
  }

  render() {
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <Link> to="/">Home</Link>
        </li>
        <li>
          <Link> to="/avengers">Avengers</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route exact path="/avengers" component={AvengersList} />
      <Route path="/avengers/:id" component={AvengerPage} />
    </div>
    )
  }
}

export default App;
