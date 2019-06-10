import React, { useContext } from "react";
import CommentsDetail from "./commentsDetail";
import { ContextState } from "../contexts/CommentsContext";
import styles from "../comments.module.css";
export default () => {
  const commentsData = useContext(ContextState);
  let count = 0;

  /**Render Components */
  function renderCommentsDetail({ name, email, body, postId }) {
    return (
      <CommentsDetail name={name} email={email} body={body} postId={postId} />
    );
  }

  /**Final Render */
  return commentsData.map(comment => (
    <div key={comment.id} className={styles.comment_list} data-count={++count}>
      {renderCommentsDetail(comment)}
    </div>
  ));
};
