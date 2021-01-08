import React, { Component } from "react";
import Habit from "./habit.jsx";
import HabitAddForm from "./habitAddForm.jsx";

class Habits extends Component {
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset Button
        </button>
      </>
    );
  }
}

export default Habits;
