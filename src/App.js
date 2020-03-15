import React from 'react';
import './App.css';
import Card from './Components/Card';
import { Row, Col } from 'antd';
import Slider from './Components/Card/Slider';
import Menu from './Components/Card/Menu';
import About from './Components/Card/About';
import Img  from './Components/Card/Img';


function App() {
  return (
    <div className="App">
      <Row id="back">
          <Col span={18} push={6} className="part-right">
            <h3>سامانه درخواست تاکسی آنلاین</h3>
          </Col>
          <Col span={6} pull={18} className="card">
            اپ تاکسی آنلاین
          </Col>
      </Row>,
      { /* ------------------------slider */ }
      <slider>
          <h1>Slider</h1>
      </slider>
      {/* -------------------------Menu */}
      <menu id="part-menu">
            <h2>دانلود اپلیکیشن و تاکسی آنلاین</h2>
            <p>لورستم لورستم</p>
      </menu>
      {/* ------------------------- about*/}
      <about>
          <h2>ویژگی های دیگر تاکسی آنلاین</h2>
      </about>
      {/* ------------------------------- img*/}
        <Img>
              <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                  <img src={Img}/>;
                </Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                  Col
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                  Col
                </Col>
              </Row>
        </Img>
    </div>
  );
}

export default App;
