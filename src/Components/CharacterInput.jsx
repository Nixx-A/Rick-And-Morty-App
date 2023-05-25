import './CharacterCard.css'
import { gql, useLazyQuery } from '@apollo/client'
import { Characters } from './Characters'
import { CharacterCard } from './CharacterCard'
import { useCharacter } from '../hook/_useCharacter'

const GET_CHARACTER = gql`
  query GetCharacter($filter: FilterCharacter) {
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

export function CharactersInput() {
  const [getCharacter, result] = useLazyQuery(GET_CHARACTER)
  useCharacter(result)

  const handleSubmit = e => {
    e.preventDefault()
    const name = new FormData(e.target).get('query')
    getCharacter({ variables: { filter: { name } } })
  }

  return (
    <>
      <section className=' flex justify-center flex-col items-center '>
      <img className='hidden md:block absolute left-20 w-44 hover:scale-125 duration-300 top-11 ' src='/Rick.png'/>
        <label className='text-white mr-2 text-2xl mb-1' htmlFor='character'>
          Search Character
        </label>
        <form onSubmit={handleSubmit}>
          <input
            className='rounded-md text-lg'
            placeholder='Morty, Rick...'
            type='text'
            name='query'
          />
        </form>
      </section>
      <div className='grid-character overflow-hidden'>
        {result?.data?.characters?.results.map(character => {
          return <CharacterCard key={character.id} data={character} />
        })}
      </div>
      <Characters />
    </>
  )
}
