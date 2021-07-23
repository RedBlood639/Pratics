import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../PriavteRoute";
//import aside menu
import AsdieMunu from "../../components/AsideMenu";
//import style
import "./style.scss";

const Home = React.lazy(() => import("./Home"));
const UserManage = React.lazy(() => import("./UserManage"));

const DashBoard: React.FC<{ history: any; match: any }> = ({ match }) => {
  return (
    <div className="dashboard">
      <div className="menu">
        <AsdieMunu />
      </div>
      <div className="content">
        <Switch>
          <PrivateRoute path={`${match.url}/`} exact component={Home} />
          <PrivateRoute
            path={`${match.url}/usermange`}
            exact
            component={UserManage}
          />
        </Switch>
      </div>
    </div>
  );
};

export default DashBoard;
