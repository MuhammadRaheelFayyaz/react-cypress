import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Navbar} from './components/navbar'
import Login from './views/Login'
import Posts from './views/Posts';
function App() {
  return (
    <>
      <Router>
      <Navbar />

        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/home" component={Posts} exact={true} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
