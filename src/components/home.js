import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      address: '',
      state: 'nsw'
    }
  }

  onNameChange(event) {
    this.setState({name: event.target.value});
  }
  onEmailChange(event) {
    this.setState({email: event.target.value});
  }
  onAddressChange(event) {
    this.setState({address: event.target.value});
  }
  onStateChange(event) {
    this.setState({state: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.history.push({
      pathname: '/result',
      state: {
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        state: this.state.state
      }
    })
  }

  render() {
    return(
      <div className="app-home">
        <form onSubmit={this.onSubmit.bind(this)}>
          <fieldset>
            <legend>Please enter your details:</legend>
            <p>
              <label htmlFor="name">Name:</label>
              <input id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </p>
            <p>
              <label htmlFor="email">Email:</label>
              <input id="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </p>
            <p>
              <label htmlFor="address">Address:</label>
              <textarea id="address" value={this.state.address} onChange={this.onAddressChange.bind(this)} />
            </p>
            <p>
              <label htmlFor="state">State:</label>
              <select id="state" value={this.state.state} onChange={this.onStateChange.bind(this)}>
                <option value="NSW">NSW</option>
                <option value="QLD">QLD</option>
                <option value="VIC">VIC</option>
                <option value="SA">SA</option>
                <option value="TAS">TAS</option>
                <option value="WA">WA</option>
                <option value="NT">NT</option>
              </select>
            </p>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Home;
