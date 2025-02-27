import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

function Navbar() {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav style={{ background: '#ddd', padding: '10px' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>

      {user ? (
        <>
          <span style={{ marginRight: '10px' }}>
            Здравей, {user.username}!
          </span>
          <button onClick={handleLogout}>Изход</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginRight: '10px' }}>Вход</Link>
          <Link to="/register" style={{ marginRight: '10px' }}>Регистрация</Link>
        </>
      )}
    </nav>
  )
}

export default Navbar
