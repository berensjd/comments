export const INITIALIZE_COMMENTS = "INITIALIZE_COMMENTS";
export const LOADING = "LOADING";
const commentsPlaceholderLength = 10;

export default (state, action) => {
  switch (action.type) {
    case INITIALIZE_COMMENTS: {
      console.log("Adding comment data to state");
      const commentsData = action.payload.comments;
      return {
        ...state,
        loading: false,
        commentsData
      };
    }
    case LOADING: {
      console.log(
        "Set comments loading placeholder until the api returns data"
      );
      let commentsData = [];
      for (let count = 0; count < commentsPlaceholderLength; count++) {
        commentsData = [
          ...commentsData,
          { postId: count, id: count, name: "Loading...", body: "Loading" }
        ];
      }

      return {
        ...state,
        setPlaceholder: false,
        commentsData
      };
    }

    default:
      return state;
  }
};
