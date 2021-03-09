import { Card, Comment, List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import FromNow from '../../component/fromNow';
import { Link } from 'react-router-dom';

function Replies(props) {
  let { loading, data = [] } = props;
  data.reverse();
  return (
    <Card
      title="评论列表"
      loading={loading}
      type="inner"
      hoverable={true}>
      <List
        dataSource={data}
        renderItem={item => {
          let { author, content, create_at } = item;
          return <List.Item>
            <Comment
              author={<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>}
              avatar={
                <Avatar icon={<UserOutlined />} src={author.avatar_url} title={author.loginname} />
              }
              content={<div dangerouslySetInnerHTML={{ __html: content }} />}
              datetime={<time>发表于：{<FromNow data={create_at} />}</time>}
            />
          </List.Item>;
        }}
        pagination={{ hideOnSinglePage: true, showSizeChanger: false, simple: true }} />
    </Card>
  );
}

export default Replies;
