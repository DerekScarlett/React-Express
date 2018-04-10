import React, { Component } from 'react';
import './Messages.css';

class Messages extends Component {
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
      width: this.props.width,
    }
    return (
      <div className="App">
        <h1>Heros</h1>
        {this.state.users.map(user =>
          <div className="Messages" style={style} key={user.name}>{user.name}</div>
        )}
      </div>
    );
  }
}

export default Messages;
