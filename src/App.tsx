import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Route, Switch } from 'react-router-dom'

//Pages
import Main from './pages/main'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
