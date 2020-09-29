import React from 'react'
import { useLocation } from 'react-router-dom'
import NavigationView from 'ui/components/Navigation/Navigation'

const HOME_URL = '/'

const Navigation = () => {
  const { pathname } = useLocation()

  return (
    <NavigationView
      title={pathname === HOME_URL ? '' : 'Curiosamente Burgos'}
    />
  )
}

export default Navigation
