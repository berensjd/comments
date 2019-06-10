import { useReducer } from "react";
import getComments from "../api/getComments";
import commentsReducer, {
  INITIALIZE_COMMENTS,
  LOADING
} from "../reducers/commentsReducer";
import { toast } from "react-toastify";
const initialState = { loading: true, setPlaceholder: true, commentsData: [] };
const comments_API_Endpoint = "comments";
export default () => {
  const [currentState, dispatch] = useReducer(commentsReducer, initialState);
  /**
   * Fetch list of comments
   * Update State
   */
  async function fetchComments() {
    let result;

    console.log("Fetching Comments from  API");
    try {
      result = await getComments(comments_API_Endpoint);
    } catch (e) {
      if (e && e.response && e.response.data) toast.error(e.response.data);
      return;
    }
    const { data: comments } = result;
    dispatch({
      type: INITIALIZE_COMMENTS,
      payload: { comments }
    });
  }

  if (currentState.setPlaceholder)
    dispatch({
      type: LOADING
    });

  if (currentState.loading && !currentState.setPlaceholder)
    if (process.env.REACT_APP_SLOW_API === "true") {
      // For demo purposes ONLY
      setTimeout(() => fetchComments(), 500);
    } else {
      fetchComments();
    }

  return { currentState, dispatch };
};
