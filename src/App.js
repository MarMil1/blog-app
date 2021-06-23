import NavBar from "./components/navbar/NavBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settingsPage/Settings";
import SingleArticle from "./pages/singleArticle/SingleArticle";
import Write from "./pages/write/Write";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/register">{user ? <Homepage /> : <Register />}</Route>
        <Route path="/login">{user ? <Homepage /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/article/:articleId">
          <SingleArticle />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
