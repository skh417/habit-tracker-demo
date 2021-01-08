import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  console.log("habit add form mounted");
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const habitName = inputRef.current.value;
    habitName && props.onAdd(habitName);
    inputRef.current.value = "";
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Add new habit"
      />
      <button className="add-button">ADD</button>
    </form>
  );
});

export default HabitAddForm;
