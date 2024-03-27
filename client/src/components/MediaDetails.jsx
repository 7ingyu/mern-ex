import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function MediaDetails () {
  let { id } = useParams();
  const navigate = useNavigate();

  const [ { name, type, release_date, genre }, setData ] = useState({
    name: null,
    type: null,
    release_date: null,
    genre: null
  })

  useEffect(() => {
    const getMedia = async () => {
      const { data } = await axios.get(`/api/media/${id}`)
      if (data.release_date) data.release_date = new Date(data.release_date)
      setData(data)
    }
    getMedia()
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`/api/media/${id}`, { name, type, release_date, genre })
  }

  const handleBack = (e) => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <label id={`media-${id}-name`} className="input-group-text">Name</label>
        <input
          id={`media-${id}-name`}
          className="form-control"
          type="text"
          name="name"
          value={name}
          onChange={e => setData({ name: e.target.value, type, release_date, genre })}
        />
      </div>
      <div className="input-group mb-3">
        <label id={`media-${id}-type`} className="input-group-text">Type</label>
        <input
          id={`media-${id}-type`}
          className="form-control"
          type="text"
          value={type}
          name="type"
          onChange={e => setData({ name, type: e.target.value, release_date, genre })}
        />
      </div>
      <div className="input-group mb-3">
        <label id={`media-${id}-genre`} className="input-group-text">Genre</label>
        <input
          id={`media-${id}-genre`}
          className="form-control"
          type="text"
          value={genre}
          name="genre"
          onChange={e => setData({ name, type, release_date, genre: e.target.value })}
        />
      </div>
      <div className="input-group mb-3">
        <label id={`media-${id}-release`} className="input-group-text">Release Date</label>
        <input
          id={`media-${id}-release`}
          className="form-control"
          type="date"
          name="release_date"
          value={release_date ? `${release_date.getFullYear()}-${release_date.getMonth() + 1}-${release_date.getDate()}` : ''}
          onChange={e => setData({ name, type, release_date: new Date(e.target.value), genre })}
        />
      </div>
      <button className="btn btn-danger" onClick={handleBack}>Back</button>
      <button className="btn btn-secondary">Update</button>
    </form>
  )
}