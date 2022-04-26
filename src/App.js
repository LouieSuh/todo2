import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom"
import MainPage from "./MainPage"
import TodoDate from './TodoDate';
import TodoAdd from './TodoAdd';


function App() {
  return (
    <div>
      <Router>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/" component={TodoDate} />
      </Router>
    </div>
  );
}



export default App;
