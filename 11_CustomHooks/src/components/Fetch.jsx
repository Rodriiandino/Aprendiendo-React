import { useFetch } from './hooks/useFetch'

export function Fetch() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const { data, isPending, error } = useFetch(url)

  return (
    <div>
      {error && <div> {error.statusText}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>
              {item.name} -- {item.username}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
