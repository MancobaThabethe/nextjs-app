import { User } from "../types"

async function getUsers() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = users.json()
  
  if(!users.ok) throw new Error('Failed to retrieve Users')
  
    console.log(data)

  return data
}

export default getUsers