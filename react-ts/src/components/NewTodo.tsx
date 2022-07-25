import React, { useRef } from "react";
import classes from './NewTodo.module.css';

const NewTodo :React.FC<{onAddTodo : (text : string)=> void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const formHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={formHandler}>
      <label className={classes.label} htmlFor="text">Todo Text</label>
      <input className={classes.input} type="text" id="text" ref={inputRef}></input>
      <button className={classes.button} type="submit">Press Enter</button>
    </form>
  );
};

export default NewTodo;
