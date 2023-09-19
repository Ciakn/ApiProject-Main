import axios from "axios";
import { useState } from "react";
import styles from "./NewComments.module.css";
const NewComment = ({ AddOneCm }) => {
  const [comments, setComments] = useState({
    name: "",
    email: "",
    body: "",
  });
  const changeHandler = (e) => {
    setComments({ ...comments, [e.target.name]: e.target.value });
  };


  return (
    <div className={styles.NewComment}>
      <div>
        <h2>Add New Comment</h2>
        <label htmlFor="">name</label>
        <input name="name" type="text" onChange={changeHandler} />
      </div>
      <div>
        <label htmlFor="">email</label>
        <input name="email" type="email" onChange={changeHandler} />
      </div>
      <div>
        <label htmlFor="">comnt</label>
        <input name="body" type="textarea" onChange={changeHandler} />
      </div>
      <button onClick={()=>AddOneCm(comments)}>Add Comment</button>
    </div>
  );
};

export default NewComment;
