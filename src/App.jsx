import { useEffect, useState } from 'react'

function App() {
  const defaultCards = [
    {
      id: 1,
      path: '../public/image/cilek.png',
      matched: false
    },
    {
      id: 2,
      path: '../public/image/muz.png',
      matched: false
    },
    {
      id: 3,
      path: '../public/image/kivi.png',
      matched: false
    },
    {
      id: 4,
      path: '../public/image/muz.png',
      matched: false
    },
    {
      id: 5,
      path: '../public/image/muz.png',
      matched: false
    },
    {
      id: 6,
      path: '../public/image/muz.png',
      matched: false
    },
    {
      id: 7,
      path: '../public/image/muz.png',
      matched: false
    },
    {
      id: 8,
      path: '../public/image/muz.png',
      matched: false
    }
  ]

  const [cards, setCards] = useState([]);

  const prepareCards = () => {
    const sortedCards = [...defaultCards, ...defaultCards].sort(() => 0.5 - Math.random());
    setCards(sortedCards);
  };

  useEffect(() => {
    prepareCards();
  }, [])
  return (
    <section className='flex flex-col items-center justify-center gap-5 mt-10' >
      <h1 className='text-3xl font-semibold text-center'>Tahmin etme oyunu</h1>
      <button className='bg-[#00ADB5] px-3 py-2 rounded-2xl hover:translate-y-1 hover:scale-105 transition-all' onClick={prepareCards} >Oyunu başlat</button>
      <div className='grid grid-cols-4 gap-2 mt-10'>
        {cards.map((card) => (
          <div className='w-[150px]'>
            <img src={card.path} />
            <img src='../public/image/kapak.png'/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default App