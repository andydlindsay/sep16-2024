import React, {Component} from 'react';

class ClassBased extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      another: true,
      older: props.age + 10,
      newStuff: null,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
  // increment = () => {
    // setState will MERGE our updates into current state
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h2>ClassBased component</h2>
        <h3>Title: {this.props.title}</h3>
        <h2>Count: {this.state.count}</h2>
        {/* <button onClick={() => this.increment()}>Increment</button> */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default ClassBased;

// const yourComponent = new ClassBased(props)
// // yourComponent.props = props;
// yourComponent.render();
// yourComponent.render();
// yourComponent.render();
// yourComponent.render();
// yourComponent.render();
