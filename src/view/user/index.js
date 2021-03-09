import React, { useEffect } from 'react';
import { Avatar, Card } from 'antd';
import { useParams } from 'react-router-dom';
import { useUser } from '../../store/action';
import { useSelector } from 'react-redux';
import TopicList from '../../component/topicslist';
import { UserOutlined } from '@ant-design/icons';
import FromNow from '../../component/fromNow';

function UserPage() {
  let { loginname } = useParams();
  let { loading, data } = useSelector(state => state.user);
  let { recent_replies = [], recent_topics = [], avatar_url, create_at, githubUsername, score } = data;
  console.log(loginname, loading, data);
  let getUser = useUser();

  useEffect(() => {
    getUser(loginname);
  }, [loginname]);

  return (
    <div className="user-page">
      <Card
        loading={loading}
        className="user-details">
        <Avatar
          size={80}
          icon={<UserOutlined />}
          src={avatar_url} />
        <p style={{ marginTop: 20 }}>用户名：{loginname} 注册时间：{<FromNow data={create_at} />} 积分：{score}</p>
        <p>github:<a target="_blank" href={`https://github.com/${githubUsername}`}>https://github.com/{githubUsername}</a></p>
      </Card>
      <Card
        loading={loading}
        title="最近创建的话题">
        <TopicList
          loading={loading}
          data={recent_topics}
        />
      </Card>
      <Card
        loading={loading}
        title="最近参与的话题">
        <TopicList
          loading={loading}
          data={recent_replies}
        />
      </Card>
    </div>
  );
}

export default UserPage;
