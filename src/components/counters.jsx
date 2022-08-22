import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {onReset, counters, onDelete, onDecrement, onIncrement} = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            // instead of 
            // id = {counter.id},
            // value= {counter.id}
            // we use encapsulation👇👇👇 such that if in the future another attribute adds.
            // we won't need to modify our code
            // counter = {counter} will handle it.
            counter={counter}
            onDelete={onDelete}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
