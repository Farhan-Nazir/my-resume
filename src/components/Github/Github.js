import React, { Component } from "react";
const API = `https://api.github.com/users/`;


class Github extends Component {
 state = {
     username: "Farhan-Nazir"
 }
    
  fetchData = username => {
    fetch(API + username)
      .then(res => res.json())
      .then(data => {
        return this.props.Username(data)
      })
      .catch(err => err);
  };
  componentDidMount() {
    this.fetchData(this.state.username);
  }

  render() {
    return <div/>
  }
}

export default Github;
