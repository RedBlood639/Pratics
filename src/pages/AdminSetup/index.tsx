import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../PriavteRoute";

const HomePage = React.lazy(() => import("./Home"));

const AdminSetup: React.FC<{ match: any }> = ({ match }) => {
  return (
    <div className="adminsetup-container">
      <Switch>
        <Route path={`${match.url}/`} exact component={HomePage} />
      </Switch>
    </div>
  );
};

export default AdminSetup;
