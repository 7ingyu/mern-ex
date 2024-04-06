import { useState, useEffect } from 'react'

const Teachers = () => {
  const [teachers, setTeachers] = useState([])
  const [newTeacher, setNewTeacher] = useState({})

  useEffect(() => {
    fetch('/api/teachers')
      .then(res => res.json())
      .then(data => {
        setTeachers(data)
      })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    let data = await fetch('/api/teachers', {
      method: 'POST',
      body: JSON.stringify(newTeacher),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    data = await data.json()
    const updatedTeachersArray = [...teachers]
    updatedTeachersArray.push(newTeacher)
    setTeachers(updatedTeachersArray)
    setNewTeacher({})
  }

  return (
    <div>
      <h1>Teachers</h1>
      <ul>
        {teachers.map(teacher => (
          <li key={teacher.id}>{teacher.subject}: {teacher.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setNewTeacher({...newTeacher, name: e.target.value})}
        />
        <input
          type="text"
          placeholder="Subject"
          onChange={(e) => setNewTeacher({...newTeacher, subject: e.target.value})}
        />
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  )
}

export default Teachers