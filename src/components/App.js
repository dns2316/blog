import React, { Component } from 'react';
import { Button, Row, Col, BackTop } from 'antd';
import 'antd/dist/antd.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import '../styles/App.scss';

class App extends Component { // будем игнорить эту ошибку линта?

  render() {
    return (
      <div>
        <Row type="flex" justify="center">
          <Col xs={24} sm={18} md={14} lg={16}>
            <BackTop>
              <div className="ant-back-top-inner">Вверх</div>
            </BackTop>
            <div className="App">
              <Header />
              <div className="main">
                <Col span={19}>
                <div className="post">
                  <div className="titlePost">title</div>
                  <div className="infoPost">
                    <div className="authorPost">By author</div>
                    <div className="tagPost">tag</div>
                    <div className="datePost">26.02.17</div>
                  </div>
                  <div className="contentPost">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                     laborum.
                   </div>
                   <br /><Button id="infoBtnPost" type="primary">Подробнее</Button>
                </div>
                </Col>
                <Col span={4}>
                <div className="tagCloud">
                  <div className="tagList">tag1 tag2 tag3 tag1 tag2 tag3 tag1 tag2 tag3</div>
                </div>
                </Col>
              </div>
              <Footer />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
