import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  const handleClick = () => {
    props.onCloseModal();
  };

  return (
    <div>
      <div className={classes.backdrop} onClick={handleClick}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>{props.message}</div>
        <footer className={classes.actions}>
          <Button onClick={handleClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
