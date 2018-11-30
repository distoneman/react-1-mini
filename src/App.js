import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture(value) {
    this.setState({
      picture: value
    })
  }

  updateName(value) {
    this.setState({
      name: value
    })
  }

  addFriend() {
    let { friends } = this.state;

    let newFriends = friends.slice();
    newFriends.push({ name: this.state.name, picture: this.state.picture });

    this.setState({
      friends: newFriends,
      picture: '',
      name: ''
    });
  }

  render() {
    const { friends } = this.state
    let displayFriends = friends.map((friend, index) => {
      console.log(friend, index)
      return (
        <div key={index}>
          <img src={friend.picture} alt='friend'/>
          <span>
            {friend.name}
          </span>
        </div>
      )
    })
    console.log(displayFriends)
    return (
      <div>
        <label>URL to Picture</label>
        <input onChange={(e) => this.updatePicture(e.target.value)}
          value={this.state.picture} />
        <label>Friends Name</label>
        <input onChange={(e) => this.updateName(e.target.value)}
          value={this.state.name} />
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {displayFriends}
      </div >
    );
  }
}

export default App;
