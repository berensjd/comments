import React from "react";
import useFetchComments from "../hooks/useFetchComments";
import { ContextState, ContextDispatch } from "../contexts/CommentsContext";
import Comments from "./Comments";
import styles from "../comments.module.css";
export default props => {
  const { currentState, dispatch } = useFetchComments();
  /**Conditional Rendering */

  function renderComments() {
    const { commentsData } = currentState;

    return commentsData.length ? (
      <ContextState.Provider value={commentsData} {...props}>
        <ContextDispatch.Provider value={dispatch}>
          <Comments />
        </ContextDispatch.Provider>
      </ContextState.Provider>
    ) : (
      renderException("No Comments Found")
    );
  }

  function renderException(message) {
    return (
      <div className={styles.loading}>
        <h2>{message}</h2>
      </div>
    );
  }
  /**Final Render */
  return currentState.loading && currentState.setPlaceholder
    ? renderException("...Loading")
    : renderComments();
};
