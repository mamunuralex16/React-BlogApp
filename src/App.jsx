import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Jobs from "./pages/jobs/Jobs";
import Contact from "./pages/contact/Contact";
import Scholarship from "./pages/scholarship/Scholarship";
import Article from "./pages/article/Article";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>

        <Route path="/jobs">{currentUser ? <Jobs /> : <Login />}</Route>

        <Route path="/contact">{currentUser ? <Contact /> : <Login />}</Route>

        <Route path="/scholarship">{currentUser ? <Scholarship /> : <Login />}</Route>

        <Route path="/article">{currentUser ? <Article /> : <Login />}</Route>

        
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
