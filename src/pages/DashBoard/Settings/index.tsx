import React, { useState } from "react";
import "./style.scss";

import { Tabs, Tab } from "react-bootstrap";
import Setting1 from "../../../components/Dashboard/Settings/Setting1";
import Setting2 from "../../../components/Dashboard/Settings/Setting2";

const Settings: React.FC = () => {
  const [key, setKey] = useState("gita");
  return (
    <div className="setting-container">
      <div className="setting-body">
        <div className="setting-content">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k: any) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="gita" title="Music & time">
              <Setting2 />
            </Tab>
            <Tab eventKey="chatbuddy" title="ChatBuddy">
              <Setting1 />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Settings;
