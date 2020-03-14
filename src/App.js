import React from 'react';
import './App.css';
import Card from './Components/Card';
import { Row, Col } from 'antd';


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
    </div>
  );
}

export default App;
