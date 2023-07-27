import { useEffect, useState } from 'react'

const getLocalStorageState = <T,>(key: string, initialState: T) => {
  const item = localStorage.getItem(key)
  return item && JSON.parse(item)
}

const setLocalStorageState = <T,>(key: string, state: T) => {
  return localStorage.setItem(key, JSON.stringify(state))
}

export default function useLocalStorage<T>(key: string, initialState: T) {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    setState(getLocalStorageState(key, initialState))
  }, [initialState])

  // return [state, setLocalState]
}
