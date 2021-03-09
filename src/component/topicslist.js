import { Avatar, Col, List } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TopicTag from './topicTag';
import FromNow from './fromNow';

function TopicsList(props) {
  let { loading, data } = props;
  return (
    <div className="topics-list">
      <List
        loading={loading}
        dataSource={data}
        renderItem={(data) => {
          let { author, last_reply_at, good, top, tab, title, id } = data;
          let { loginname, avatar_url } = author;
          return <List.Item>
            <Col
              xs={24}
              md={20}
            >
              <Link to={`/user/${loginname}`}>
                <Avatar className="topic-avatar" icon={<UserOutlined />} src={avatar_url} title={loginname} />
              </Link>
              <TopicTag tab={top ? "top" : (good ? "good" : tab)} />
              <Link to={`/topic/${id}`}>{title}</Link>
            </Col>
            <Col
              xs={0}
              md={4}
              className="from-now"
            >
              <FromNow data={last_reply_at} />
            </Col>
          </List.Item>;
        }} />
    </div>
  );
}

export default TopicsList;
