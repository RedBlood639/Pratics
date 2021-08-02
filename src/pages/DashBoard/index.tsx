import React from "react";
import { Switch, Redirect } from "react-router-dom";
import PrivateRoute from "../PriavteRoute";
//import style
import "./style.scss";

//import aside menu
import AsdieMunu from "../../components/Layout/AsideMenu";
//import content component
const Home = React.lazy(() => import("./Home"));
const UserManage = React.lazy(() => import("./UserManage"));
const Settings = React.lazy(() => import("./Settings"));

const DashBoard: React.FC<{ history: any; match: any }> = ({ match }) => {
  return (
    <div className="dashboard">
      <div className="menu">
        <AsdieMunu />
      </div>
      <div className="content">
        {/* <div className="heaer">
          <Header />
        </div> */}
        <Switch>
          <PrivateRoute path={`${match.url}`} exact component={Home} />
          <PrivateRoute
            path={`${match.url}/usermanage`}
            exact
            component={UserManage}
          />
          <PrivateRoute
            path={`${match.url}/settings`}
            exact
            component={Settings}
          />
          <Redirect to="/error" />
        </Switch>
        {/* <div className="footer">
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default DashBoard;
