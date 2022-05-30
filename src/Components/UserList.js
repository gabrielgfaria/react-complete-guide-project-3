import UserCard from "./UserCard";

const UserList = (props) => {
  return <ul>
      {props.users.map(user => <UserCard key={user.id} user={user}/>)}
  </ul>;
};

export default UserList;
