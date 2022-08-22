import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            // the counter componet is a child component to the counters componet.
            // this are all props, except the key which is used to uniquely identify a counter
            key={counter.id}
            // instead of 
            // id = {counter.id},
            // value= {counter.id}
            // we use encapsulation👇👇👇 such that if in the future another attribute adds.
            // we won't need to modify our code
            // counter = {counter} will handle it.
            counter={counter}
            onDelete={() => this.handleDelete(counter)}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
