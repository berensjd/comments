import React, { memo } from "react";
import styles from "../comments.module.css";
export default memo(({ name, email, body, postId }) => {
  return (
    <div className={styles.comment_item}>
      <div className={styles.comment_item__name}>{name}</div>
      <div className={styles.comment_item__body}>{body}</div>
    </div>
  );
});
