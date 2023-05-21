import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { LayoutPublic } from './Pages/LayoutPublic'
import { CharactersInput } from './Components/CharacterInput'
import { Info } from './Components/Info'
import { Characters } from './Components/Characters'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: '/',
        element: <CharactersInput />
      },
      {
        path: '/',
        element: <Characters />
      },
      {
        path: 'character/:id',
        element: <Info />
      }
    ]
  }
])
