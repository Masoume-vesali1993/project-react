import React from 'react';
import './App.css';
import Card from './Components/Card';
import { Row, Col } from 'antd';
import Slider from './Components/Card/Slider';
import Menu from './Components/Card/Menu';
import About from './Components/Card/About';
import Left  from './Components/Card/Left';
import Center  from './Components/Card/Center';
import Right  from './Components/Card/Right';
import Towpart from './Components/Card/Towpart';
import Download from './Components/Card/Download';
import Appid from './Components/Card/Appid';
import Apple from './Components/Card/Apple';
import Bazar from './Components/Card/Bazar';



function App() {
  return (
    <div className="App">
      <Row id="back">
          <Col span={18} push={6} className="part-right">
            <h3>سامانه درخواست تاکسی آنلاین</h3>
          </Col>
          <Col span={6} pull={18} className="card">  
            <p>اپ تاکسی آنلاین</p>
          </Col>
      </Row>,
      { /* ------------------------slider */ }
      <slider>               
          <div>
              <img src="https://auto.ndtvimg.com/car-images/large/ford/mustang/ford-mustang.jpg?v=32" />
              <p className="legend">Legend 1</p>
          </div>

          <div>
              {/* <img src="https://cdn.shopify.com/s/files/1/1658/5307/products/bloomr-flowers-velvet-rose-artificial-flowers-artificial-trees-artificial-plants-dubai-saudi-arabia-uae-5152233848891_2024x2024.jpg?v=1575467895" /> */}
              <p className="legend">Legend 2</p>
          </div>

          <div>
              {/* <img src="https://cdn.shopify.com/s/files/1/1658/5307/products/bloomr-flowers-velvet-rose-artificial-flowers-artificial-trees-artificial-plants-dubai-saudi-arabia-uae-5152233848891_2024x2024.jpg?v=1575467895" /> */}
              <p className="legend">Legend 3</p>
          </div>
      </slider>
      {/* -------------------------Menu */}
      <menu id="part-menu">
            <h2>دانلود اپلیکیشن و تاکسی آنلاین</h2>
            <p>لورستم لورستم</p>
      </menu>
      {/* ------------------------- about*/}
      <about id="text-center">
          <h2>ویژگی های دیگر تاکسی آنلاین</h2>
      </about>
      {/* ------------------------------- img*/}
        <Row>
              <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <Left/>
                <img src={Left}/>;
              </Col>

              <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                <Center/>
                <img src={Center}/>;
              </Col>

                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <Right/>
                  <img src={Right} />
                </Col>
        </Row>
          {/* ----------------------------------towpart */}
          <Row>
            <Towpart />
              <Col span={12} id="part">
                <p>قرار داد ثبتنام رانندگان</p>
              </Col>
              <Col span={12} id="part2">
                <p>با کمک تاکسی آنلاین به راحتی می توان کسب درامد کرد</p>
              </Col>
          </Row>
          {/* ------------------------------------download */}
          <download>
            <h1 id="parttext">دانلود اپلیکشین موبایل</h1>
              <Row>
                <Col span={6}>
                    <Row>
                      <Col span={12}>
                        <Appid />
                        <img src={Appid} />
                      </Col>
                      <Col span={12}>
                        <p>دانلود مستقیم از بازار</p>
                      </Col>
                    </Row>
                </Col>

                <Col span={6}>
                    <Row>
                      <Col span={12}>
                        <Apple />
                        <img src={Appid} />
                      </Col>
                      <Col span={12}>
                        <p>دانلود مستقیم </p>
                      </Col>
                    </Row>
                </Col>

                <Col span={6}>
                    <Row>
                      <Col span={12}>
                        <Bazar />
                        <img src={Bazar} />
                      </Col>
                      <Col span={12}>
                        <p>دانلود از بازار </p>
                      </Col>
                    </Row>
                </Col>

                <Col span={6}>
                   <Download />
                   <img src={Download} />
                </Col>
              </Row>
          </download>
    </div>
  );
}

export default App;
