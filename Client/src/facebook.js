import React, { Component } from "react";
class FacebookLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }
  componentDidMount() {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "9972a0fc52eda5699788ad55576e0bbc",
        cookie: true,
        xfbml: true,
        version: "v5.0",
      });
      window.FB.AppEvents.logPageView();
    };
  }
  getUserDetails = () => {
    window.FB.login(function (response) {
      if (response.authResponse) {
        console.log("Welcome!  Fetching your information.... ");
        window.FB.api("/me", function (response) {
          //Write your back end api call
          console.log(response);
          console.log("Good to see you, " + response.name + ".");
        });
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    });
  };
  checkLoginState = () => {
    window.FB.getLoginStatus(function (response) {
      console.log(response);
      //statusChangeCallback(response);
    });
  };
  render() {
    return <button onClick={this.getUserDetails}>Facebook Login Button</button>;
  }
}
export default FacebookLogin;
