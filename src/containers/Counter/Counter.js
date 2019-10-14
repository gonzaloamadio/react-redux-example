import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case 'dec':
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case 'add':
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case 'sub':
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.state.counter} />
        <CounterControl
          label="Increment"
          clicked={() => this.counterChangedHandler('inc')}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.counterChangedHandler('dec')}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.counterChangedHandler('add', 5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.counterChangedHandler('sub', 5)}
        />
      </div>
    );
  }
}

// It is a function that returns a function, which takes
// a component as an input. It is function that returns a HOC.
// The idea of this, is that we can pass a configuration to the first call.
//  connect(<HERE>)(Counter)
// - We can pass, what slice of the state is interesting for this container. (imagine
// if we have a huge state and we are only interested in one variable)
// - Which actions do I want to dispatch (same as above)

// Config: How we map state managed by redux to this components prop (we are not going to
// manage state internally, maybe).
// Config what information do we need.
// Expect state, and returns object which is a map of prop names and slices of the redux state.
const mapStateToProps = state => {
  return {
    // Here we are saying, give me the counter property of the redux state. And give it to me in the
    // form of the prop called "ctr", that then I can use in the component.
    ctr: state.counter
  };
};

// Connect will give us the Counter component with acces to the crt property.
export default connect(mapStateToProps)(Counter);
