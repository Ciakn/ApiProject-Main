import { useEffect } from "react";
import { useState } from "react";
import styles from "./FullComments.module.css";
import { getOneComment } from "../../services/getOneComment";
import { deleteComment } from "../../services/deleteComments";
import { getAllComments } from "../../services/getAllComments";
const FullComments = ({ selectedId, setComment, setSelectedId }) => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    getOneComment(selectedId)
      .then((response) => setComments(response.data))
      .catch((err) => console.log(err));
    console.log(selectedId);
  }, [selectedId]);
  const deleteHandler = () => {
    deleteComment(selectedId)
      .then((response) => getAllComments())
      .then((response) => {
        setComment(response.data);
        setSelectedId(null);
        setComments(null);
      })
      .catch();
  };

  let selectedItem = <p>please Select a Comment</p>;
  if (selectedId) selectedItem = <p>Loading...</p>;
  if (comments) {
    selectedItem = (
      <div className={styles.FullComments}>
        <p>{comments.name}</p>
        <p>{comments.email}</p>
        <p>{comments.body}</p>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    );
  }
  return selectedItem;
};

export default FullComments;
