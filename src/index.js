import React from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/style.scss'
import Hello from './Hello'
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Hello />)
