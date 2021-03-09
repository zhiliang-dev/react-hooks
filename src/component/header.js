import { Affix, Col, Layout, Menu, Row } from 'antd';
import { React } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nav } from '../router';

function Header(props) {
  // 获取路径
  let { pathname } = useLocation();
  /**获取当前选中项的下标 */
  let activeIndex = nav.findIndex(navData => {
    return pathname === navData.to;
  });

  return (<Affix offsetTop={0}>
    <Layout.Header id='header'>
      <div className="wrap">
        <Row>
          <Col xs={6} sm={4} md={2}>
            <h1 className="logo"><Link to='/'>logo</Link></h1>
          </Col>
          <Col xs={18} sm={20} md={22}>
            <Menu
              mode="horizontal"
              theme="dark"
              selectedKeys={[activeIndex + ""]}>
              {nav.map((item, index) => {
                return <Menu.Item key={index}>
                  <Link to={item.to}>{item.text}</Link>
                </Menu.Item>;
              })}
            </Menu>
          </Col>
        </Row>
      </div>
    </Layout.Header>
  </Affix>);
}

export default Header;
