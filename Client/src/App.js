import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
function App() {
  const onSuccess = (data) => {
    console.log(data.tokenId);
    axios
      .post("http://localhost:3001/google-login", { token: data.tokenId })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
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
          // uxMode={"redirect"}
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
