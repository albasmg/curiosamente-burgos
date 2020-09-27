import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/Home/Home'
import Chapter from 'pages/Chapter/Chapter'
import NotFound from 'pages/NotFound/NotFound'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/capitulo/:chapterNumber" exact component={Chapter} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
