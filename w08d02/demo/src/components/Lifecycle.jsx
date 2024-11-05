import React from 'react';

class Lifecycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      intervalId: null,
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  // fetch data, establish a socket connection, setup timers/intervals
  // useEffect(() => {}, []);
  componentDidMount() {
    console.log('the component has been added to the DOM');
    const intervalId = setInterval(() => {
      console.log('inside the interval');
    }, 2000);

    this.setState({ intervalId });
  }

  // fire every time state or props change
  // listen for a particular value to change
  // useEffect(() => {}, [age])
  componentDidUpdate(prevProps, prevState) {
    console.log('the component has updated');
    if (prevState.count !== this.state.count) {
      // count has changed
    }
    if (prevProps.age !== this.props.age) {
      // age has changed
    }
  }

  // perform cleanup; clear timers/intervals, sever socket connections
  // useEffect that returns a callback
  componentWillUnmount() {
    console.log('the component is about to be removed from the DOM');

    clearInterval(this.state.intervalId);
  }

  submitHandler(event) {
    event.preventDefault();
    alert(`you are signing in as ${this.state.username} with password ${this.state.password}`);
  }


  render() {
    return (
      <div>
        <h2>Lifecycle!</h2>

        <form onSubmit={this.submitHandler}>
          <label>Username</label>
          <input 
            value={this.state.username}
            onChange={(event) => this.setState({ username: event.target.value })}
          />
          <br/>
          <label>Password</label>
          <input 
            value={this.state.password}
            onChange={(event) => this.setState({ password: event.target.value })}
          />
          <button type="submit">Login!</button>
        </form>
      </div>
    );
  }
}

export default Lifecycle;
