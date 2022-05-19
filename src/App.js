import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm/index'
import NotFound from './components/NotFound/index'
import Home from './components/Home/index'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginForm} />
    <Route component={NotFound} />
  </Switch>
)

export default App
