import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/Home/Home'
import Chapter from 'pages/Chapter/Chapter'
import NotFound from 'pages/NotFound/NotFound'
import Navigation from 'containers/Navigation/Navigation'

const App = () => {
  return (
    <div className="main">
      <Navigation />
      <Switch>
        <Route path="/capitulo/:chapterNumber" exact component={Chapter} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
