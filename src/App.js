import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import playerData from './data/data.json';
import Player from './components/Player/Player';
import Cart from './components/Player/Cart/Cart';



function App() {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() =>{
    setPlayers(playerData);
    //console.log(playerData);
   
  }, [])
  const handleAddPlayer = (player) => {
    //console.log('added', player);
  const newCart = [...cart, player]
  setCart(newCart);
}
  

  return (
    <div className="App">
      <h1>Player Loaded: {players.length}</h1>
      <h4>Player Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      
        {
          players.map(player => <Player player={player} key={player.id} handleAddPlayer={handleAddPlayer}> </Player>)
        }
      
    </div>
  );
}

export default App;
