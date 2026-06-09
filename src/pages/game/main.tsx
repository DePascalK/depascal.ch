import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../styles/index.css'
import Game from './tictactoe.tsx'
import { FullNavBar } from '../../shared/ui_elements.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FullNavBar/>
    <hr/>
    <h1>Tic-Tac-Toe, try it!</h1>   

    <Game />
  </StrictMode>,
)
