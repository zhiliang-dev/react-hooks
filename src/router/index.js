import React from 'react';
import IndexPage from '../view/index';
import AboutPage from '../view/about';
import GetStartPage from '../view/getstart';
import Page404 from '../view/page404';
import TopicPage from '../view/topic';
import UserPage from '../view/user';
import qs from 'qs';

const types = ['all', 'good', 'share', 'ask', 'job', 'dev'];

const route = [
  {
    path: "/",
    exact: true,
    render(props) {
      let { location } = props;
      let { search } = location;
      let { tab, page } = qs.parse(search.substr(1));
      if ((tab === undefined && page === undefined) || (types.includes(tab) && (page === undefined || page > 0))) {
        return <IndexPage {...props} />;
      }
      return <Page404 {...props} />;
    }
  },
  {
    path: "/topic/:id",
    exact: true,
    render(props) {
      return <TopicPage {...props} />;
    }
  },
  {
    path: "/getstart",
    exact: true,
    render(props) {
      return <GetStartPage {...props} />;
    }
  },
  {
    path: "/about",
    exact: true,
    render(props) {
      return <AboutPage {...props} />;
    }
  },
  {
    path: "/user/:loginname",
    exact: true,
    render(props) {
      return <UserPage {...props} />;
    }
  },
  {
    path: "",
    exact: false,
    render(props) {
      return <Page404 {...props} />;
    }
  },
];

const nav = [
  {
    to: "/",
    text: "首页",
  },
  {
    to: "/getstart",
    text: "新手入门",
  },
  {
    to: "/about",
    text: "关于我们",
  }
];

const indexNav = [
  {
    name: "全部",
    url: "/?tab=all",
  },
  {
    name: "精华",
    url: "/?tab=good",
  },
  {
    name: "分享",
    url: "/?tab=share",
  },
  {
    name: "问答",
    url: "/?tab=ask",
  },
  {
    name: "招聘",
    url: "/?tab=job",
  },
  {
    name: "客户端测试",
    url: "/?tab=dev",
  }
];

export { route, nav, indexNav, types };
