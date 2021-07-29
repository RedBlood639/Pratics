import React from "react";
import { Switch, Redirect } from "react-router-dom";
import PrivateRoute from "../PriavteRoute";
//import style
import "./style.scss";

//import aside menu
import AsdieMunu from "../../components/Layout/AsideMenu";
//import content component
const Home = React.lazy(() => import("./Home"));
// const Footer = React.lazy(() => import("../../components/Layout/Footer"));
const UserManage = React.lazy(() => import("./UserManage"));

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
