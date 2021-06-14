import './App.css';
// import BestPlayers from "./best-players"
// import ButtonClick from './button-click';
// import axios from "axios";
// import  { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from './pages/main';
import BestPage from './pages/best.page';
import Settings from './pages/settings';
import Header from "./header/header";


function App() {
  return (
    <Router>
      <div className="App">
        
        <Header/>
        <Switch>
          <Route exact path="/"><Main/></Route>
          <Route path="/best-players"><BestPage/></Route>
          <Route path="/settings"><Settings/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
