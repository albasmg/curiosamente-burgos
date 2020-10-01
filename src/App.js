import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/Home/Home'
import Chapter from 'pages/Chapter/Chapter'
import NotFound from 'pages/NotFound/NotFound'
import Navigation from 'containers/Navigation/Navigation'
import { CHAPTERS_NUMBER } from './constants'

const VALID_CHAPTER_NUMBERS = [CHAPTERS_NUMBER.ONE, CHAPTERS_NUMBER.TWO]

const App = () => {
  return (
    <div className="main">
      <Navigation />
      <div className="wrapper">
        <Switch>
          <Route
            path={`/capitulo/:chapterNumber(${VALID_CHAPTER_NUMBERS.join(
              '|',
            )})`}
            exact
            component={Chapter}
          />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  )
}

export default App
