import './App.css'
import getRandomPhrase from './helpers/random.js'
import quotes from './db/quotes.json'
import QuoteCard from './components/QuoteCard.jsx'
import { useState } from 'react'

const backgrounds = [
  "bg1",
  "bg2",
  "bg3",
  "bg4",
]

function App() {
  const [quote, setQuote] = useState(getRandomPhrase(quotes))
  const [currentBg, setCurrentBg] = useState(getRandomPhrase(backgrounds))

  const handleChangeQuote = () => {
    setQuote(getRandomPhrase(quotes))
    setCurrentBg(getRandomPhrase(backgrounds))
  }

  return (
    <main className={`app ${currentBg}`}>
      <QuoteCard quote={quote} handleChangeQuote={handleChangeQuote} />
    </main>
  )
}

export default App
