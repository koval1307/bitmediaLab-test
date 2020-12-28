// import HomePage from './views/HomePage/HomePage'
import UsersPage from './views/UsersPage/UsersPage'
import HomePage from './views/HomePage/HomePage'
import UsersStatsPage from './views/UsersStatsPage/UsersStatsPage'
import NotFound from '../src/components/NotFound/NotFound'
import './App.css';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} render={() => <HomePage />} />
        <Route exact path={"/users"} render={() => <UsersPage />} />
        <Route
          path={"/users/:userId"}
          render={() => <UsersStatsPage />}
        />
        <Route path={"*"} render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
