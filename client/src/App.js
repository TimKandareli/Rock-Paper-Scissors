import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Table from './components/Table/Table'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'

const App = () => {
  return (
    <Router>
      <div className='container main-app'>
        <Navbar/>
        <Switch>
          <Router exact path='/'>
            <Main />
          </Router>
          <Router exact path='/table'>
            <Table />
          </Router>
          <Router exact path='/signin'>
            <SignIn />
          </Router>
          <Router exact path='/signup'>
            <SignUp />
          </Router>
        </Switch>

      </div>
    </Router>

  )
}

export default App

