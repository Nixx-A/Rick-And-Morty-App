import { useEffect, useState } from 'react'
import { Info } from '../Components/Info'

export function useCharacter(result) {
  const [info, setinfo] = useState(null)

  useEffect(() => {
    if (result?.data?.characters?.results) {
      console.log(result)
      setinfo(result?.data?.characters?.results)
    }
  }, [result])

  return []
}
