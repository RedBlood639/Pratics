import React from "react";
import FacebookLogin from "react-facebook-login-typed";
import "./styles.css";
function App() {
  const responseFacebook = (res) => {
    // console.log(res.state);
  };

  return (
    <div className="App">
      <center>
        <FacebookLogin
          appId="9972a0fc52eda5699788ad55576e0bbc"
          autoLoad={false}
          callback={responseFacebook}
          render={(renderProps) => (
            <button onClick={renderProps.onClick}>button</button>
          )}
        />
      </center>
    </div>
  );
}

export default App;
