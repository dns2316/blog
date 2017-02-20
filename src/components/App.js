import React, { Component } from 'react';
// import { Row, Col } from 'antd';
// import Header from './header/Header'
// import Footer from './footer/Footer'
import '../styles/App.scss';

class App extends Component {

  render() {
    return (
            <div className="main">
              <video id="video_player" width="80%" height="auto" autoplay muted loop onplaying="this.controls=false" webkit-playsinline playsinline>
                <source src="http://s.storage.akamai.coub.com/get/b62/p/coub/simple/cw_file/2f5112baee6/c59d1822e5c34f17a8db1/muted_mp4_big_size_1487268195_muted_big.mp4" type="video/mp4"/>
              </video>
            </div>
    );
  }
}

export default App;

{/* <Row>
  <Col span={21}>
    <div className="App">
      <Header />
      <div className="main">
        <video id="video_player" width="100%" height="auto" autoplay muted loop onplaying="this.controls=false" webkit-playsinline playsinline>
          <source src="http://s.storage.akamai.coub.com/get/b62/p/coub/simple/cw_file/2f5112baee6/c59d1822e5c34f17a8db1/muted_mp4_big_size_1487268195_muted_big.mp4" type="video/mp4"/>
        </video>
      </div>
      <Footer />
    </div>
  </Col>
</Row> */}
