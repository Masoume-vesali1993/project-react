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
import Servies from './Components/Card/Servies';
import Engine from './Components/Card/Engine';
import Truck from './Components/Card/Truck';
import Servi from './Components/Card/Servi';
import Taxi from './Components/Card/Taxi';
import Contact from './Components/Card/Contact';
import Best from './Components/Card/Best';
import Car1 from './Components/Card/Car1';
import Trip from './Components/Card/Trip';




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
        <Row className="img">
              <Col xs={2} sm={4} md={6} lg={8} xl={10} className="part">
                <Left/>
                <img src={Left}/>;
                <p>امنیت در سفر</p>
              </Col>

              <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                <Center/>
                <img src={Center}/>;
                <p>قیمت مناسب</p>
              </Col>

                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <Right/>
                  <img src={Right} />
                  <p>درخواست آسان</p>
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
                <Col span={6} className="img-text">
                    <Row className="img-text-one">
                      <Col span={12}>
                        <Appid />
                        <img src={Appid} />
                      </Col>
                      <Col span={12} className="text-one">
                        <p>دانلود مستقیم از بازار</p>
                      </Col>
                    </Row>
                </Col>

                <Col span={6} className="img-text">
                    <Row className="img-text-one">
                      <Col span={12}>
                        <Apple />
                        <img src={Apple} />
                      </Col>
                      <Col span={12} className="text-one">
                        <p>دانلود مستقیم </p>
                      </Col>
                    </Row>
                </Col>

                <Col span={6} className="img-text">
                    <Row className="img-text-one">
                      <Col span={12}>
                        <Bazar />
                        <img src={Bazar} />
                      </Col>
                      <Col span={12} className="text-one">
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
          {/* ------------------------------------Servies */}
          <servies>
            <div className="txt">
              <h1 className="textpart">خدمات تاکسی آنلاین</h1>
                <Row gutter={16} className="partt">
                  <Col className="gutter-row" span={6}>
                    <div className="part1">
                      <Taxi />
                      <img src={Taxi} />
                      <p>تاکسی</p>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div>
                      <Servi />
                      <img src={Servi} />
                      <p>خدمات</p>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div>
                      <Truck />
                      <img src={Truck} />
                      <p>کامیون</p>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div>
                      <Engine />
                      <img src={Engine} />
                      <p>موتور</p>
                    </div>
                  </Col>
              </Row>
            </div>
          </servies>
          {/* ------------------------------------Contact */}
          <div className="parttt">
            <contact>
              <Row className="parttext">
                <Col span={8}>
                  <div className="textpp">
                    <p>برای تماس با بخش مدیریت با شمارهای زیر در تماس باشین</p>
                    <h3>0312456789</h3>
                    <h3>0312456789</h3>
                    <h3>0312456789</h3>
                  </div>
                </Col>
                <Col span={12} className="textppp">
                  <h3>تاکسی آنلاین فرصت شغلی مناسب است</h3>
                  <h3>پل ارتباطی راهی بسیار آسان است</h3>
                  <h3>تخفیفات شامل تعداد درخواست تاکسی آنلاین است</h3>
                </Col>
                <Col span={4}></Col>
              </Row>
            </contact>
          </div>
          {/* -----------------------------------Best */}
          <best>
            <div className="bestpart">
              <h1>بهترین معاملات</h1>
              <h3>انتخاب نوع ماشین مورد نظر</h3>
            </div>
            <Row>
              <Col span={8}>
                <Car1 />
                <img src={Car1} />
                <h4>ماشین یک</h4>
                <p>بهترین و پرکیفیت ترین ماشین</p>
              </Col>

              <Col span={8}>
                <Car1 />
                <img src={Car1} />
                <h4>ماشین یک</h4>
                <p>بهترین و پرکیفیت ترین ماشین</p>
              </Col>

              <Col span={8}>
                <Car1 />
                <img src={Car1} />
                <h4>ماشین یک</h4>
                <p>بهترین و پرکیفیت ترین ماشین</p>
              </Col>
          </Row>
          <h1 className="tagcenter"><a>تصاویر بیشتر</a></h1>
        </best>
        {/* ------------------------------------Car1 */}
        <trip>
          <div className="textend">
            <h3>برای اطمینان از سفر و خدمات ما</h3>
            <h1><a> ادامه مطلب</a></h1>
          </div>
        </trip>
        
      </div>
  );
}

export default App;
