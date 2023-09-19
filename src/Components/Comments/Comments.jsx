import styles from "./Comment.module.css";
const Comments = ({ name, email, id, onClick }) => {
  return (
    <div key={id} className={styles.comment} onClick={onClick}>
      <p>name : {name}</p>
      <p>Email : {email}</p>
 
    </div>
  );
};

export default Comments;
