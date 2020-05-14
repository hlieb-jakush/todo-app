import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { initializeApp } from './state/reducer'
import Preloader from './components/Preloader/Preloader'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'


function App({ initializeApp, initialized }) {
  useEffect(() => {
    initializeApp()
  }, [])

  if (!initialized) return <Preloader />

  return (
    <Route path='/list/:listId' children={(routeObj) => (
      <div className='todo'>
        <Sidebar routeObj={routeObj} />
        <Main />
      </div>
    )} />

  )
}

const mapStateToProps = (state) => {
  return {
    initialized: state.initialized
  }
}

export default connect(mapStateToProps, { initializeApp })(App)