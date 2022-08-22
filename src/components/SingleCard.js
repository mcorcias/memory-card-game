
import './SingleCard.css'

export default function SingleCard({card,handleChoice}) {

  return (
    <div className='card'>
        <img className='front' src={card.src} alt = "card front" />
        <img onClick={()=>handleChoice(card)} className='back' src="/img/cover.png" alt = "card back" />
    </div>
  )
}
