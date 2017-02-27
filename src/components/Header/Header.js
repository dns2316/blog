import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../../styles/Header.scss';

class Header extends Component {

  render() {
    return (
      <div>
        <div className="mainHeader">
          <span id="name">Blog</span>
        </div>
        <div className="menu">
          <Row type="flex" justify="center">
            <Col span={8}>
              <a href="#"><img src="images/menu_02.png" /></a>
            </Col>
            <Col span={8}>
              <a href="#"><img src="images/menu_03.png" /></a>
            </Col>
            <Col span={8}>
              <a href="#"><img src="images/menu_04.png" /></a>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Header;
