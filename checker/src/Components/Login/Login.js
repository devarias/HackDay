import React, { useState } from "react";
import Info from "../Info/Info";
import axios from "axios";

function Login(props) {
  const HolbertonUrl = "https://intranet.hbtn.io";
  const babyYoda = "https://i.imgur.com/UnfCdzJ.png";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiKey, setAPIKey] = useState("");

  const handleGetEmail = (event) => {
    // setEmail(event.target.value);
    setEmail("1808@holbertonschool.com");
  };
  const handleGetPassword = (event) => {
    // setPassword(event.target.value);
    setPassword("HolbertonC12");
  };
  const handleGetApiKey = (event) => {
    // setAPIKey(event.target.value);
    setAPIKey("edffd887749a5acff54a1843d2caea1e");
  };
  const data = {
    api_key: apiKey,
    email: email,
    password: password,
    scope: "checker",
  };

  const buttonName = () => {
    axios
      .post(HolbertonUrl + "/users/auth_token.json", data, {
        ContentType: "application/json",
      })
      .then((response) => {
        if (response.status === 200) {
          Info.name = response.data.full_name;
          Info.auth_token = response.data.auth_token;
          axios
            .get(
              HolbertonUrl + "/users/me.json?auth_token=" + Info.auth_token,
              { ContentType: "application/json" }
            )
            .then((res) => {
              if (res.status === 200) {
                Info.linkedinUser = res.data.linkedin_url;
                Info.githubUser = res.data.github_username;
                Info.twitterUser = res.data.twitter_username;
                Info.profilePicture = res.data.profile_pic;
                props.history.push("/selection");
              }
            });
        }
      });
  };
  return (
    <div className="loginForm">
      <img className="babyYoda" src={babyYoda} alt="" />
      <h3>Holberton Email</h3>
      <input
        className="box"
        type="text"
        placeholder="Email"
        onChange={handleGetEmail}
      />
      <br />
      <h3>Password</h3>
      <input
        className="box"
        type="password"
        placeholder="Password"
        onChange={handleGetPassword}
      />
      <br />
      <h3>Api Key</h3>
      <input
        className="box"
        type="text"
        placeholder="Api Key"
        onChange={handleGetApiKey}
      />
      <br />
      <button onClick={buttonName}>Submit</button>
    </div>
  );
}
export default Login;
