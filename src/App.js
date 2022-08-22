import { useState } from 'react'
import SingleCard from '../src/components/SingleCard'
import './App.css'

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]


function App() {
  const [cards,setCards] = useState([])
  const [turns,setTurns] = useState(0)
  const [choiceOne,setChoiceOne] = useState(null)
  const [choiceTwo,setChoiceTwo] = useState(null)


  // shuffle cards
   const shuffleCards = () => {
    const shuffleCards = [...cardImages,...cardImages]
      .sort(()=>Math.random() - 0.5)
      .map((card)=>({...card, id:Math.random()}))

      setCards(shuffleCards)
      setTurns(0)
   }

  // handle choice
  const handleChoice = (card) => {
    console.log(card);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card)=>(
          <SingleCard card={card} key={card.id} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App