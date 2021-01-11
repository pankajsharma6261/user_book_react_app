import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Navbar from './components/elements/Navbar'
import AddUser from './components/pages/AddUser'
import Home from './components/pages/Home'
import {Provider} from 'react-redux'
import store from './store'
import EditUser from './components/pages/EditUser'
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/user/add' component={AddUser}></Route>
          <Route exact path='/user/edit/:id' component={EditUser}></Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
