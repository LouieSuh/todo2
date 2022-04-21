import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom"
import MainPage from "./MainPage"
import TodoDate from './TodoDate';


function App() {
  return (
    <div>
      <Router>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/" component={MainPage} />
      </Router>
    </div>
  );
}


function TodoContainer() {
  return (
    <div> 
      <Router>
        <Route exact path="/" exponent={TodoContainer} />
      </Router>
    </div>
  );
}


export default App;
