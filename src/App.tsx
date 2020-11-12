import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Route, Switch } from 'react-router-dom'

//Pages
import Main from './pages/main'
import SinglePost from './pages/singlePost'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/:post" component={SinglePost} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
