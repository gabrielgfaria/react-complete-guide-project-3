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
    <div>
      <AddUser onAddNewUser={addNewUser} />
      <UsersList users={users} />
    </div>
  );
};

export default App;
