import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import { getAllUsers } from '../api'

function Login() {
  const { login } = useContext(AuthContext)
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const users = await getAllUsers()
      const foundUser = users.find(
        (u) =>
          u.username === formData.username &&
          u.password === formData.password
      )

      if (foundUser) {
        login(foundUser)
        navigate('/')
      } else {
        setError('Невалидно потребителско име или парола!')
      }
    } catch (err) {
      setError('Възникна грешка при входа!')
    }
  }

  return (
    <div style={{ margin: '20px' }}>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Потребителско име: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Парола: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Влез</button>
      </form>
    </div>
  )
}

export default Login
