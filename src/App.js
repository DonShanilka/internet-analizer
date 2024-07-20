
import { useState } from 'react';
import { Layout, Typography, Button, Col, Row, Image, Statistic, Card, message } from "antd";
import { BarcodeOutlined, ArrowUpOutlined, ArrowDownOutlined, HomeOutlined, FieldTimeOutlined, RedoOutlined } from "@ant-design/icons";
import axios from 'axios';
import speed from "./images/"


const { Content } = Layout;
function App() {
  return (
    <>
      <Layout style={{ padding: "0 24px 24px", marginTop: 100, height: "100vh" }}>
        <Content></Content>
      </Layout>
    </>
  );
}

export default App;
