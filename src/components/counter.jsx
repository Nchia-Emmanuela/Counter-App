import React, { Component } from "react";

class Counter extends Component {
  //   Arrow functions do not rebind the this keyword. so to make this accesible to the
  // handleIncrement function, we either use the arrow function or we use the
  // constructor method as shown bellow.👇👇👇

  //   constructor(){
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this)
  //   }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          // the child component raises an event know as the onDelete event and the parent component handles it.
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
