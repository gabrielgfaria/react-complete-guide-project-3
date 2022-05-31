import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [error, setError] = useState();
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const handleNameChange = (event) => {
    setUser((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  };

  const handleAgeChange = (event) => {
    setUser((prevState) => {
      return {
        ...prevState,
        age: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (user.name.trim().length === 0 || user.age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please add a valid input (non empty name and age)",
      });
      return;
    }
    if (+user.age < 1) {
      setError({
        title: "Invalid Input",
        message: "Please add a valid age (> 0)",
      });
      return;
    }

    props.onAddNewUser(user);
    setUser({ name: "", age: "" });
  };

  const handleCloseModal = () => {
    setError();
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseModal={handleCloseModal}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user.name}
            onChange={handleNameChange}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={user.age}
            onChange={handleAgeChange}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
