
import './SingleCard.css'

export default function SingleCard({card,handleChoice,flipped,disabled}) {
 
  return (
    <div className='card'>
        <div className={flipped ? "flipped" : ""}>
            <img className='front' src={card.src} alt = "card front" />
            <img onClick={()=>!disabled && handleChoice(card)} className='back' src="/img/cover.png" alt = "card back" />
        </div>
    </div>
  )
}
