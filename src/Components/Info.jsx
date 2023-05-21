import { gql, useLazyQuery } from '@apollo/client'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Info.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const GET = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      id
      image
      name
      species
      gender
      status
    }
  }
`

export function Info() {
  const { id } = useParams()
  const [getCharacter, result] = useLazyQuery(GET)

  useEffect(() => {
    if (id) {
      console.log(id)
      getCharacter({ variables: { characterId: id } })
      console.log(result?.data)
    }
  }, [id])
  const short = result?.data?.character

  return (
    <>
      <div className='absolute trans py-4 charactfilter '>
        <div className='text-white rounded-full p-1 bg-pink-500 w-fit'>
          <Link to={'/'} className='twxt-white text-lg'>
            <AiOutlineArrowLeft />
          </Link>
        </div>
        <div className='flex justify-center w-full flex-col items-center'>
          <img
            className='relative top-1 shadow-lg rounded-full w-44 object-cover'
            src={short?.image}
            alt={short?.name}
          />
          <div className='bg-white w-4/6 h-full rounded-t-lg '>
            <div className='text-center'>
              <p className='font-semibold text-xl mt-1 text-pink-600'>
                {short?.name}
              </p>
              <p className='text-black font-medium'>
                Species: {short?.species}
              </p>
              <p className='text-black font-medium'>Gender: {short?.gender}</p>
              <p className='text-black font-medium'>Status: {short?.status}</p>
            </div>
          </div>
        </div>
      </div>
      <img className='absolute bottom-0 left-0 w-60' src='/RickandMorty.png' />
    </>
  )
}
