import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import '../../styles/Footer.scss';

class Footer extends Component {

  render() {
    return (
      <div className="mainFooter">
          <Row type="flex" justify="center">
            <Col span={8}>
              <span>
                Имя<br/>
                Фамилия
              </span>
            </Col>
            <Col span={8}>
              <span>
                Телефон: 1234567890<br/>
                email: email@email.com
              </span>
            </Col>
            <Col span={8}>
              <span>
                Время<br/>
                Адрес
              </span>
            </Col>
          </Row>
      </div>
    );
  }
}

export default Footer;
