import { Alert } from 'antd';
import React, { useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useTopic } from '../../store/action';
import Details from './details';
import Replies from './replies';

function TopicPage() {
  const { loading, data, isError, err_msg } = useSelector(state => state.topic);
  let { id } = useParams();
  let history = useHistory();
  let getData = useTopic();
  // console.log(id);
  useEffect(() => {
    getData(id);
  }, [id]);
  // console.log(data);

  return (
    <div className="topic-page">
      {isError ? <Alert
        closable
        message="请求出错"
        type="error"
        description={
          <Fragment>
            <p>{err_msg}</p>
            <p>点击关闭按钮返回上一步</p>
          </Fragment>
        }
        afterClose={() => {
          history.goBack();
        }}
      /> : (
          <Fragment>
            <Details loading={loading} data={data} />
            <Replies loading={loading} data={data.replies} />
          </Fragment>
        )}
    </div>
  );
}

export default TopicPage;
