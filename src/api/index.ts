const secretKey = btoa(`${import.meta.env.VITE_USERNAME}:${import.meta.env.VITE_PASSWORD}`)

const useFetch = async (param: string) => {
  const res = await fetch(`/hczj_datastand/_search`, {
    method: 'POST',
    headers: {
      "Content-type": 'application/json',
      "Authorization": `Basic ${secretKey}`
    },
    body: JSON.stringify({
      query: {
        wildcard: {
          chName: `*${param}*`
        }
      }
    })
  })
  if(res.ok)
    return (await res.json() as any).hits.hits
  else return new Error('Oops! Something wrong!')
}

export default useFetch