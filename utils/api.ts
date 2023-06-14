import { error } from "console"

const createURL = path => {
  return window.location.origin + path
}

export const updateEntry = async (id, content) => {
  const res = await fetch(
    new Request(createURL(`/api/journal/${id}`), {
      method: 'PATCH',
      body: JSON.stringify({ content})
    })
  )

  if (res.ok){
    const data = await res.json()
    return data.data
  } else {
    throw new Error('Could not update entry on API Server')
  }
}

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL('/api/jopurnal'), {
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
