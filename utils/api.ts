// const export const createNewEntry = () => {}

const createURL = path => {
  return window.location.origin + path
}

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(
      createURL('/api/jopurnal'),
    {
      method: 'POST',
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  } else {
    throw new Error('Something went wrong on API server!')
  }
}
