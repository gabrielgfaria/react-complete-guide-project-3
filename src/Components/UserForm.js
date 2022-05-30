import { useState } from "react";

const UserForm = (props) => {
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
    props.onAddNewUser(user);

    setUser({ name: "", age: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Username</h1>
      <input value={user.name} onChange={handleNameChange}></input>
      <h1>Age (Years)</h1>
      <input value={user.age} onChange={handleAgeChange}></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
