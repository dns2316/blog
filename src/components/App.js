import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';
// import Header from './header/Header'
// import Footer from './footer/Footer'
import '../styles/App.scss';

class App extends Component { // будем игнорить эту ошибку линта?

  render() {
    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={7}>
            <div className="App">
              {/* <Header /> */}
              <div className="main">
                <video
                  id="video_player"
                  width="50%"
                  height="auto"
                  autoPlay muted loop onplaying="this.controls=false"
                  webkit-playsinline
                >
                  <source
                    src="http://s.storage.akamai.coub.com/get/b62/p/coub/simple/cw_file/2f5112baee6/c59d1822e5c34f17a8db1/muted_mp4_big_size_1487268195_muted_big.mp4"
                    type="video/mp4"
                  />
                </video>
                <br /><Button type="primary">Primary</Button>
              </div>
              {/* <Footer /> */}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
