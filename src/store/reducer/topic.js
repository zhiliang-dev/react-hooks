export default function topic(topic = {
  loading: true,
  data: { author: {} },
  isError: false,
  err_msg: "",
}, action) {
  switch (action.type) {
    case "topic_loading":
      return {
        loading: true,
        data: { author: {} },
        isError: false,
        err_msg: "",
      };
    case "topic_loaded":
      return {
        loading: false,
        data: action.data,
        isError: false,
        err_msg: "",
      };
    case "topic_error":
      return {
        loading: false,
        data: { author: {} },
        isError: true,
        err_msg: action.err_msg,
      };
    default:
      return topic;
  }
}
