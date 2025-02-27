const BASE_URL = 'http://localhost:5000'

export async function getAllUsers() {
  const res = await fetch(`${BASE_URL}/users`)
  if (!res.ok) {
    throw new Error('Cannot fetch users')
  }
  return await res.json()
}

export async function registerUser(data) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) {
    throw new Error('Registration failed')
  }
  return await res.json()
}

export async function getItems() {
  const res = await fetch(`${BASE_URL}/items`)
  if (!res.ok) {
    throw new Error('Cannot fetch items')
  }
  return await res.json()
}
