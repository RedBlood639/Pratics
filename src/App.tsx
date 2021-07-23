import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import PrivateRoute from "./pages/PriavteRoute";
import Loading from "./components/Loading";

// import stylesheets
import "./assets/scss/app.scss";
const AdminSetup = React.lazy(() => import("./pages/AdminSetup"));
const UserManage = React.lazy(() => import("./pages/DashBoard"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={AdminSetup} />
            <Route path="/error" exact component={ErrorPage} />
            <PrivateRoute path="/dashboard" exact component={UserManage} />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
