import React from "react"


const Card = ({ card, handleSelected, rotated , disabled }) => {
    const handleClick = () => {
        if(!disabled){
            handleSelected(card)
        }
    }
    return (
        <div className='w-[150px] card'>
        <div className={rotated ? "rotated" : "" }>
            <img src={card.path} className={`h-[150px] right-4 front `}/>
            <img className="back "
            src='../public/image/kapak.png' 
            onClick={handleClick}/>
        </div>
        </div>
    )
}

export default Card;