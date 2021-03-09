import axios from 'axios';
import { useDispatch } from 'react-redux';
const http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
});

// 获取主题数据列表
function useTopicsList() {
  const dispatch = useDispatch();
  return function (tab = 'all', page = 1, limit = 20, mdrenderer = true) {
    dispatch({
      type: 'topics_loading'
    });
    http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrenderer}`)
      .then(res => {
        dispatch({
          type: 'topics_loaded',
          data: res.data.data
        });
      });
  };
}

// 获取主题数据详情
function useTopic() {
  const dispatch = useDispatch();
  return function (id) {
    dispatch({
      type: 'topic_loading'
    });
    http.get(`/topic/${id}`)
      .then(res => {
        dispatch({
          type: 'topic_loaded',
          data: res.data.data
        });
      }).catch(res => {
        dispatch({
          type: 'topic_error',
          err_msg: res.response.data.error_msg,
        });
      });
  };
}

// 获取用户数据详情
function useUser() {
  const dispatch = useDispatch();
  return function (loginname) {
    dispatch({
      type: 'user_loading'
    });
    http.get(`/user/${loginname}`)
      .then(res => {
        dispatch({
          type: 'user_loaded',
          data: res.data.data
        });
      }).catch(res => {
        dispatch({
          type: 'user_error',
          err_msg: res.response.data.error_msg,
        });
      });
  };
}
export { useTopicsList, useTopic, useUser };
