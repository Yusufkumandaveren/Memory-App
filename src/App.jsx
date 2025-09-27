import { useEffect, useState } from 'react'
import Card from './components/Card';
import Congrats from './components/Congrats';

function App() {
  const defaultCards = [
    {
      path: '../public/image/cilek.png',
      matched: false
    },
    {
      path: '../public/image/muz.png',
      matched: false
    },
    {
      path: '../public/image/kivi.png',
      matched: false
    },
    {
      path: '../public/image/elma.png',
      matched: false
    },
    {
      path: '../public/image/karpuz.png',
      matched: false
    },
    {
      path: '../public/image/uzum.png',
      matched: false
    },
    {
      path: '../public/image/ananas.png',
      matched: false
    },
    {
      path: '../public/image/erik.png',
      matched: false
    }
  ]

  const [count, setCount] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)


  const [showCongrats, setShowCongrats] = useState(false)

  const [cards, setCards] = useState([]);
  const [selectedOne, setSelectedOne] = useState(null);
  const [selectedTwo, setSelectedTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);




  const prepareCards = () => {
    const sortedCards = [...defaultCards, ...defaultCards].sort(() => 0.5 - Math.random())
      .map((card) => ({ ...card, id: Math.random() }))
    setCards(sortedCards);
    resetState();
    resetCount();
  };

  const handleSelected = (card) => {
    if (disabled) return true;
    selectedOne ? setSelectedTwo(card) : setSelectedOne(card);
  }

  useEffect(() => {
    prepareCards();
  }, [])


  useEffect(() => {
    if (selectedOne && selectedTwo) {
      setCount(count + 1)
      setDisabled(true)
      if (selectedOne.path == selectedTwo.path) {
        setCorrectCount(correctCount + 10)
        setCards((prev) => {
          return prev.map((card) => {
            if (card.path == selectedOne.path) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetState()
      } else {
        setCorrectCount(correctCount - 2)
        setTimeout(() => {
          resetState()
        }, 1000);
      }
    }
  }, [selectedOne, selectedTwo])

  const resetCount = () => {
    setCount(0);
    setCorrectCount(0);
  }

  const resetState = () => {
    setSelectedOne(null)
    setSelectedTwo(null)
    setDisabled(false)
    setShowCongrats(false)
  }

  useEffect(() => {
    if (cards.length > 1 && cards.every((card) => card.matched)) {
      setTimeout(() => {
        setShowCongrats(true)
      }, 1000);
    }
  }, [cards])

  return (
    <section className='flex flex-col items-center justify-center gap-5 mt-10' >
      <h1 className='text-3xl font-semibold text-center'>Tahmin etme oyunu</h1>
      <p className='font-semibold text-2xl text-center'>Hamle sayısı : {count} </p>
      <div className='flex flex-row gap-5 ' >
        <p className='font-semibold text-2xl text-center mr-5 flex gap-2'>Puan : <p className=''>{correctCount}</p></p>
      </div>
      <div className='grid grid-cols-4 gap-2 mt-10 '>
        {cards.map((card, ind) => (
          <Card card={card} key={ind} handleSelected={handleSelected} rotated={card == selectedOne || card == selectedTwo || card.matched} disabled={disabled} />
        ))}
      </div>
      <button className='bg-[#00ADB5] mt-2 px-4 py-3 rounded-2xl hover:translate-y-1 hover:scale-105 transition-all text-xl font-semibold mb-12' onClick={prepareCards} >Oyunu başlat</button>
      {showCongrats && <Congrats setShowCongrats={setShowCongrats} prepareCards={prepareCards} />}
    </section>
  )
}

export default App