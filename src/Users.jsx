import { useEffect, useState } from "react";


export default function Users() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  
  useEffect(()=> {
    const fetchUser = async ()=> {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
       const data = await res.json()
       setUsers(data)
  }
    fetchUser()
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>

      <p data-testid="count">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
