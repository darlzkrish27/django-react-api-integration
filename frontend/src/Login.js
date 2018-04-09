import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(){
        super();
        this.state = {
          username: '',
          password: '',
        };
    }

    navigatetopolls(token){
        try {
          const res = fetch('http://localhost:8000/api/polls/1',{
            headers: new Headers({
              'Authorization' : 'Token'+ token

            })
          });
          const polls = res.json();
          console.log(polls)
          this.State= { polls }
        } catch (e) {
          console.log(e);
        }
      }

    onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { username, password } = this.state;

        axios.post('http://localhost:8000/api/login/', {
            username: username,
            password: password,
          })
          .then((response) => {
            console.log(response);
            let token =response.data['token'];
            localStorage.setItem("token", token)
            this.props.history.replace({pathname: '/App'});
            //this.navigatetopolls(token)
            
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    
    render() {
        const { username, password } = this.state;
        return(
          <form onSubmit={this.onSubmit}>
            <label htmlFor="username">Enter username</label>
            <input name="username" type="text" value={username} onChange={this.onChange}/>

            <label htmlFor="password">Enter your password</label>
            <input name="password" type="password" value={password} onChange={this.onChange}/>

            <button type="submit">Submit!</button>
          </form>
        );
      }
}

export default Login;