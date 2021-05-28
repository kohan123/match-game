import './App.css';
import BestPlayers from "./best-players"
import ButtonClick from './button-click';
import CardList from './card/card-list';
import { bestPlayers, cardList } from './test-data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <BestPlayers players={bestPlayers} />
        <ButtonClick className="blueButton" text="ADD USER"/>
        <ButtonClick className="witeButton" text="CANCEL"/> */
        }
        <CardList cards={cardList} />
      </header>
    </div>
  );
}

export default App;
