import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  //   Arrow functions do not rebind the this keyword. so to make this accesible to the
  // handleIncrement function, we either use the arrow function or we use the
  // constructor method as shown bellow.👇👇👇

  //   constructor(){
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this)
  //   }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
