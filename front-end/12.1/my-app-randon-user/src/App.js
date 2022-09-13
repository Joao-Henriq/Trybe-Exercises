import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      user: [],
    }
  };

  fetchRandonUser = async () => {
    this.setState({
      loading: true,
    },
    async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://api.randomuser.me/')
      const requestObj = await requestReturn.json();

      this.setState({
        loading: false,
        user:  requestObj.results 
      })
    });
  }

  componentDidMount() {
    this.fetchRandonUser();
  }


  render() {
    const {user} = this.state;
    console.log(user);
    return (
      <div>
        a
      </div>
    );
  }
}
 
export default App;