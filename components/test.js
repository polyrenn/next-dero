import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Price() {
  const { data, error } = useSWR('/api/price', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1 mx="300px">{data.name}</h1>
      <p>{}</p>
    </div>
  )
}

export default Price
