import { useEffect, useRef, useState } from 'react'

const useSearch = () => {
  const [search, setSearch] = useState('')
  const [formError, setFormError] = useState(null)
  const isFirstLoad = useRef(true)

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = search === ''
      return
    }

    const input = search.trim()

    if (input.length < 3) {
      setFormError('Min length must be 3')
      return
    }

    // if (input.match(/^\)d+$/)) {
    //   setFormError('Can not contain numbers')
    //   return
    // }

    setFormError(null)
  }, [search])

  return { search, setSearch, formError }
}

export default useSearch
