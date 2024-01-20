import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }) 

  return (
    <>
      <h1>Jokes 🙂</h1>
      <h1>{jokes.length}</h1>
      <div>
        {
          jokes.map((joke, index) => {
            return(
                    <div key={joke.id}>
                      <h3>{joke.title}</h3>
                      <h3>{joke.content}</h3>
                    </div>
                  )
          })
        }
      </div>
    </>
  )
}

export default App
