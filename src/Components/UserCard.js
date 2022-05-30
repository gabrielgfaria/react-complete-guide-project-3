const UserCard = (props) => {
  return <div>{props.user.name + " (" + props.user.age + " years old)"}</div>;
};

export default UserCard;
