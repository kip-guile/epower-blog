import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Route, Switch } from 'react-router-dom'

//Pages
import Main from './pages/main'
import SinglePost from './pages/singlePost'
import PageNotFound from './pages/pageNotFound'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/posts/:post" component={SinglePost} />
        <Route component={PageNotFound} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
