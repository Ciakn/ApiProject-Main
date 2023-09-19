import axios from "axios";
import { useEffect, useState } from "react";
import Comments from "../../Components/Comments/Comments";
import FullComments from "../../Components/FullComments/FullComments";
import NewComment from "../../Components/NewComment/NewComment";
import { AddOneComment } from "../../services/AddOneComment";
import { getAllComments } from "../../services/getAllComments";
import { http } from "../../services/services";

import styles from "./Disscusion.module.css";
const Disscusion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  console.log(selectedId);
  const [err, setErr] = useState(false);
  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllComments();

        setComments(data);
      } catch (error) {
        setErr(true);
      }
    };
    getComments();
  }, []);
  const selectedComment = (id) => {
    setSelectedId(id);
  };
  const postHandler = (comments) => {
    AddOneComment({ ...comments, postId: 10 })
      .then((response) => getAllComments())
      .then((response) => setComments(response.data));
  };

  const RenderComments = () => {
    let renderValue = <p>...Loading...</p>;
    if (comments && !err) {
      renderValue = comments.map((c) => (
        <Comments
          key={c.id}
          name={c.name}
          email={c.email}
          onClick={() => selectedComment(c.id)}
        />
      ));
    }
    return renderValue;
  };

  return (
    <main>
      <section>{RenderComments()}</section>
      <section>
        <FullComments
          selectedId={selectedId}
          setComment={setComments}
          setSelectedId={setSelectedId}
        />
      </section>
      <section>
        <NewComment AddOneCm={postHandler} />
      </section>
    </main>
  );
};

export default Disscusion;
