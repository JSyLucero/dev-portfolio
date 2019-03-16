import React from "react";
import { ApiContainer } from './api.services';
import { Provider, Subscribe } from "unstated";
import { Account } from "models"

export class UserAuthContainer extends ApiContainer {
  api_schema = "auth"

  constructor({initialState = {}, saveState = true, service = "auth"}) {
    if (Object.keys(initialState).length == 0)
      initialState = new Account();
      
    super({ initialState: initialState, saveState: saveState, service: service });
  }

  async login(username = "", password = "") {
    if (username != "" && password != "") {
      this.post({ username: username, password: password })
        .then((response) => {
          console.log(response.data);
          if (Object.keys(response.data).length > 1) {
            this.setState(response.data);
          }
        });
    } else {
      this.setState({ username: "TestUser", authToken: true });
    }
  }

  async logout() {
    console.log(`${this.state.username} has logged out`);
    for (key in this.state) {
      this.setState({ [key]: key == "username" ? "guest" : null });
    }
  }

  async register(firstName, lastName, username, email, password, user_role = "user") {
    let newUserData = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
    }
    this.create(api_scema, newUserData);
  }

  get() {
    return super.get(this.api_schema);
  }

  post(data = {}) {
    return super.post(this.api_schema, data);
  }

  create(data = {}) {
    return super.create(this.api_schema, data);
  }

  update(data = {}) {
    return super.update(this.api_schema, data);
  }

  delete(data = {}) {
    return super.delete(this.api_schema, data);
  }
}

const UserAuthService = new UserAuthContainer({});

export const UserAuthProvider = props => {
  return <Provider inject={props.inject || [UserAuthService]}>{props.children}</Provider>;
};

export const UserAuthSubscriber = props => {
  return <Subscribe to={props.to || [UserAuthService]}>{props.children}</Subscribe>;
};

export default UserAuthService;