import React, { Component } from "react";

import axios from "axios";
import {
  LinkButtons,
  SubmitButtons,
  registerButton,
  homeButton,
  forgotButton,
  inputStyle,
  HeaderBar,
} from "../components";

const title = {
  pageTitle: "Forgot Password Screen",
};

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      showError: "",
      messageFromServer: "",
    };
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = (e) => {
    e.preventDefault();
    if (this.state.email === "") {
      this.setState({
        showError: false,
        messageFromServer: "",
      });
    } else {
      axios
        .post("http://localhost:3001/forgotPassword", {
          email: this.state.email,
        })
        .then((res) => {
          if (res.data === "email not in db") {
            this.setState({
              showError: true,
              messageFromServer: "",
            });
          } else {
            this.setState({
              showError: false,
              messageFromServer: "recovery email sent",
            });
          }
        })
        .catch((err) => {
          console.log(err.data);
        });
    }
  };
  render() {
    const { email, messageFromServer, showError } = this.state;

    return (
      <div>
        <HeaderBar title={title}></HeaderBar>
        <form className="profile-form" onSubmit={this.sendEmail}>
          <input
            style={inputStyle}
            id="email"
            label="email"
            value={email}
            onChange={this.handleChange("email")}
          ></input>
          <SubmitButtons
            buttonStyle={forgotButton}
            buttonText={"send password Reset email"}
          ></SubmitButtons>
        </form>
      </div>
    );
  }
}
