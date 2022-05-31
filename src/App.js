import React from "react";
import { useState } from "react";
import UsersList from "./Components/Users/UsersList";
import AddUser from "./Components/Users/AddUser";

const App = () => {
  const [users, setUsers] = useState([]);

  const addNewUser = (user) => {
    setUsers((prevState) => {
      var newUser = {
        ...user,
        id: Math.random().toString(),
      };
      return [...prevState, newUser];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddNewUser={addNewUser} />
      <UsersList users={users} />
    </React.Fragment>
  );
};

export default App;
