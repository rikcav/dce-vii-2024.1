import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './globalStyles.ts'
import Home from './pages/Home/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Home />
  </React.StrictMode>,
)
