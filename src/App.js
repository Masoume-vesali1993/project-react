import React from 'react';
import './App.css';
import Card from './Components/Card';
import { Row, Col } from 'antd';
function App() {
  return (
    <div className="App">
          <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <Card text="salam" />
      </Col>
      <Col className="gutter-row" span={6}>
      <Card text="salam" />
      </Col>
      <Col className="gutter-row" span={6}>
      <Card text="salam" />
      </Col>
      <Col className="gutter-row" span={6}>
      <Card text="salam" />
      </Col>
    </Row>
    </div>
  );
}

export default App;
