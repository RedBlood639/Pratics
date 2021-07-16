import React, { useEffect } from "react";
import { GoogleLogin, useGoogleLogin } from "react-google-login";

function App() {
  const onSuccess = (res) => {
    // console.log(res);
    console.log(res.Ys.It, res.Ys.Ve);
  };

  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <div className="App">
      <center>
        <GoogleLogin
          clientId={
            "1040122098766-np12c1kq29d6l16cmo8o5gk5ptrv98go.apps.googleusercontent.com"
          }
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Google
            </button>
          )}
          buttonText="Login"
          onSuccess={onSuccess}
          uxMode={"redirect"}
          onFailure={onFailure}
          RedirectURL={"postmessage"}
          cookiePolicy={"single_host_origin"}
          // responseType="code"
        />
      </center>
    </div>
  );
}

export default App;
