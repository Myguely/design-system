import React from 'react'
import logo from './logo.svg'
import { BalApp, BalButton } from '@baloise/design-system-components-react'
import './App.scss'

function App() {
  return (
    <BalApp>
      <BalButton>Button</BalButton>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </BalApp>
  )
}

export default App