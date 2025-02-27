import { useEffect, useState } from 'react'
import { getItems } from '../api'

function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const data = await getItems()
        setItems(data)
      } catch (error) {
        console.error('Грешка при взимане на items:', error)
      }
    })()
  }, [])

  return (
    <div style={{ margin: '20px' }}>
      <h2>Начална страница (Home)</h2>
      <p>Добре дошли! Тук виждате списък с данни, достъпен само за логнати потребители.</p>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.title}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
