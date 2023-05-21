import { Link, Outlet } from 'react-router-dom'

export function LayoutPublic() {
  return (
    <main className='w-screen h-screen  bg-stars2 bg-no-repeat bg-cover overflow-x-hidden'>
      <section className='w-screen flex justify-center items-center'>
        <Link className='' to={'/'}>
          <img
            className=' w-auto md:h-40 md:w-auto xl:h-52 hover:scale-105 duration-500'
            src='/Logo.png'
            alt='Rick and Morty Logo'
          />
        </Link>
      </section>
      <Outlet />
    </main>
  )
}
