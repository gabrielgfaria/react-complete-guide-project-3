import { useState } from "react";
import UserForm from "./Components/UserForm";
import UserList from "./Components/UserList";

const initialList = [
  {
    id: "u1",
    name: "Nina",
    age: 21,
  },
];

const App = () => {
  const [users, setUsers] = useState(initialList);

  const addNewUser = (user) => {
    setUsers((prevState) => {
      var bla = {
        ...user,
        id: Math.random().toString()
      }
      return [bla, ...prevState];
    });
  };

  return (
    <div>
      <UserForm onAddNewUser={addNewUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
