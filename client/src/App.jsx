import { useState, useEffect, useRef, createRef } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [ media, setMedia ] = useState([])
  const inputs = useRef([])

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

  const handleAdd = () => {
    setMedia([...media, { id: media.length, name: '' }])
  }

  const handleSave = async () => {
    const newMedia = inputs.current.map(el => ({
      id: el.id.replace('media-', ''),
      value: el.value
    }))
    const { data } = await axios.post('/api/media', { media: newMedia })
    setMedia(data)
  }
  return (
    <>
      <h1>Media Library</h1>
      <div className="card">
        {media.map(({ id, name }, i) => (
          <input id={`media-${id}`} key={id} ref={(el) => inputs.current[i] = el} defaultValue={name} />
        ))}
        <button className="btn btn-secondary" onClick={handleAdd}>+</button>
        <button className="btn btn-dark" onClick={handleSave}>Save</button>
      </div>
    </>
  )
}

export default App
