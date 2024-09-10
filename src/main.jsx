import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GameApp } from './GameApp';

import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameApp />
  </StrictMode>,
)
