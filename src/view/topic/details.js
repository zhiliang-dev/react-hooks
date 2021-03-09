import React, { Fragment } from 'react';
import { Card } from 'antd';
import TopicTag from '../../component/topicTag';
import { Link } from 'react-router-dom';
import FromNow from '../../component/fromNow';

function Details(props) {
  let { loading, data } = props;
  console.log(data);
  let { author, content, create_at, good, top, visit_count, tab, title, reply_count } = data;
  return (
    <Card
      loading={loading}
      title={<Fragment>
        <h1>
          <TopicTag tab={top ? "top" : (good ? "good" : tab)} />{title}
        </h1>
        <p>- 作者: <Link to={`/user/${author.loginname}`}>{author.loginname}</Link> - 创建时间: <FromNow data={create_at} /> - 浏览人数: {visit_count}</p>
      </Fragment>}
      type="inner"
      hoverable
    >
      <div dangerouslySetInnerHTML={{
        __html: content
      }}></div>
    </Card>
  );
}

export default Details;
