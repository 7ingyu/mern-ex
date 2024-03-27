import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [ media, setMedia ] = useState([])

  useEffect(() => {
    const getMedia = async () => {
      const { data } = await axios.get('/api/media')
      for (let item of data) {
        if (item.release_date) item.release_date = new Date(item.release_date)
      }
      setMedia(data)
    }

    getMedia()
  }, [])

  return (
    <>
      <h1>Media Library</h1>
      <div className="card">
        <ul>
          {media.map(({ id, name, release_date, type }) => (
            <li key={id}>
              <span>&quot;{name}&quot; ({type})</span>
              {release_date && (<span> - released {release_date.toDateString()}</span>)}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
