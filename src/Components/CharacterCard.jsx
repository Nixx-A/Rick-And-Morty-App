/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './CharacterCard.css'

export function CharacterCard({ data }) {
  const { image, name, species } = data
  return (
    <div className='flex justify-center items-center flex-col  mt-16 w-5/6 ml-8 py-4 charactfilter'>
      <img
        className='relative top-1 shadow-lg rounded-full w-44 object-cover'
        src={image}
        alt={name}
      />
      <div className='bg-white w-5/6 h-full rounded-t-lg '>
        <div className='text-center'>
          <p className='font-semibold text-xl mt-1 text-pink-600'>{name}</p>
          <p className='text-black font-medium'>Species: {species}</p>
          <Link className='hover-underline-animation font-semibold text-pink-400 hover:text-pink-700 duration-200' to={`/character/${data.id}`}>More info</Link>
        </div>
      </div>
    </div>
  )
}
