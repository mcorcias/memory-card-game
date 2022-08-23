import { useEffect, useState } from 'react'
import SingleCard from '../src/components/SingleCard'
import './App.css'

const cardImages = [
  { "src": "/img/helmet-1.png", matched:false },
  { "src": "/img/potion-1.png", matched:false },
  { "src": "/img/ring-1.png", matched:false },
  { "src": "/img/scroll-1.png", matched:false },
  { "src": "/img/shield-1.png", matched:false },
  { "src": "/img/sword-1.png", matched:false },
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
    if(choiceOne){
      setChoiceTwo(card)
    }else{
      setChoiceOne(card)
    }
  }

  const reset = ()=>{
    setChoiceTwo(null)
    setChoiceOne(null)
    setTurns(prev=>prev + 1)
  }

  useEffect(()=>{
    if(choiceOne && choiceTwo){
      if(choiceOne.src == choiceTwo.src){
        setCards(prev=> prev.map(card=>{
          if(card.src == choiceOne.src){
            return {...card, matched:true}
          }else{
            return card
          }
        }))
        reset()
      }else{
        setTimeout(() => {
          reset()
        }, 1000);
      }
    }
  },[choiceOne,choiceTwo])

  

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card)=>(
          <SingleCard 
            card={card} 
            key={card.id} 
            handleChoice={handleChoice} 
            flipped={card == choiceOne || card == choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App