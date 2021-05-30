import './App.css';
//import BestPlayers from "./best-players"
import ButtonClick from './button-click';
import Header from './header/header';
//import CardList from './card/card-list';
//import { bestPlayers, cardList } from './test-data';

function App() {
  return (
    <div className="App">
     {/* { <BestPlayers players={bestPlayers} />
        <ButtonClick className="blueButton" text="ADD USER"/>
        <ButtonClick className="witeButton" text="CANCEL"/> 
        <CardList cards={cardList} /> } */}
        <Header />
    </div>
  );
}

export default App;
