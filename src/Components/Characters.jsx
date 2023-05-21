import { gql, useQuery } from '@apollo/client'
import { CharacterCard } from './CharacterCard'
import './CharacterCard.css'

const GET_INITIAL_CHARACTERS = gql`
  query Query($filter: FilterCharacter) {
    characters(filter: $filter) {
      results {
        image
        name
        status
        species
        gender
        id
        episode {
          episode
          name
        }
        location {
          name
        }
      }
    }
  }
`

/* eslint-disable react/prop-types */
export function Characters() {
  const { data, loading, error } = useQuery(GET_INITIAL_CHARACTERS)
  const result = data?.characters?.results

  if (error) return <span className='text-red text-xl'>{error}</span>

  return (
      <div className='grid-character overflow-hidden'>
        {loading ? <p className='text-2xl '>Loading...</p> : result.map(character => <CharacterCard key={character.id} data={character} />)}
        </div>
  )
}
