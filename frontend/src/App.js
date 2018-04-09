// App.js
import React, { Component } from 'react';

class App extends Component {
  state = {
    polls: []
  };

  async componentDidMount() {
    try {
      var token =localStorage.getItem('token')
      const res = await fetch('http://localhost:8000/api/polls/1',{
        headers: new Headers({
          'Authorization' : 'Token'+ token

        })
      });
      const polls = await res.json();
      console.log(polls)
      this.State= { polls }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.polls.map(item => (
            <h1>{item.id}</h1>
        ))}
      </div>
    );
  }
}

export default App;
