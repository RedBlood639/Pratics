import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../PriavteRoute";
//import style
import "./style.scss";

//import aside menu
import AsdieMunu from "../../components/Layout/AsideMenu";
//import content component
const Home = React.lazy(() => import("./Home"));
const UserManage = React.lazy(() => import("./UserManage"));
const AddUser = React.lazy(() => import("./UserManage/AddUser"));

const DashBoard: React.FC<{ history: any; match: any }> = ({ match }) => {
  return (
    <div className="dashboard">
      <div className="menu">
        <AsdieMunu />
      </div>
      <div className="content">
        <Switch>
          <PrivateRoute path={`${match.url}`} exact component={Home} />
          <PrivateRoute
            path={`${match.url}/usermanage`}
            exact
            component={UserManage}
          />
          <PrivateRoute
            path={`${match.url}/adduser`}
            exact
            component={AddUser}
          />
          <Redirect to="/error" />
        </Switch>
      </div>
    </div>
  );
};

export default DashBoard;
