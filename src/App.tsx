import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import PrivateRoute from "./pages/PriavteRoute";
import Loading from "./components/Layout/Loading";

// import stylesheets
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/app.scss";

const AdminSetup = React.lazy(() => import("./pages/AdminSetup"));
const DashBoard = React.lazy(() => import("./pages/DashBoard"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={AdminSetup} />
            <PrivateRoute path="/dashboard" component={DashBoard} />
            <Route path="/error" exact component={ErrorPage} />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
