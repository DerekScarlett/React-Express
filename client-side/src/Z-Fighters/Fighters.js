import React, { Component } from 'react';
import './Fighters.css';

class Fighters extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/api/messages',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {

    const style = {

      backgroundColor: this.props.color,
    }
    return (
      <div className="App">
        <h1>Phrases</h1>
        {this.state.users.map(user =>
          <div style={style} key={user.name}>{user.msg}</div>
        )}
      </div>
    );
  }
}

export default Fighters;
