import React from 'react';
import { Menu } from 'antd';
import { indexNav, types } from '../../router';
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs';

function IndexNav() {
  let { search } = useLocation();
  let { tab } = qs.parse(search.substr(1));
  let activeIndex = tab === undefined ? 0 : (types.indexOf(tab));

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[activeIndex + '']}
      className="index-nav">
      {
        indexNav.map((item, index) => {
          return <Menu.Item key={index}><Link to={item.url}>{item.name}</Link></Menu.Item>;
        })
      }
    </Menu>
  );
}

export default IndexNav;
