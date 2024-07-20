
import { useState } from 'react';
import { Layout, Typography, Button, Col, Row, Image, Statistic, Card, message } from "antd";
import { BarcodeOutlined, ArrowUpOutlined, ArrowDownOutlined, HomeOutlined, FieldTimeOutlined, RedoOutlined } from "@ant-design/icons";
import axios from 'axios';
import speed from "./images/performance.png";


const { Content } = Layout;
const { Title } = Typography;

function App() {
  //hook
  const [loading, setLoading] = useState(false);
  const [btnStatus, setBtnStatus] = useState(0);
  const [data, setData] = useState({
    downloadSpeed: 0,
    uploadSpeed: 0,
    dowmloaded: 0,
    latency: 0,
    bufferBloat: 0,
    userLocation: " - ",
    userIp: "0.0.0.0",
  });

  //headres
  const config = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
  };

  //Button submit arrow Function
  const onSubmit = () => {
    setLoading(true);
    setBtnStatus(1);

    axios.post("http://localhost:4000/speed", config).then((val) => {
      setLoading(false);
      setData(val?.data?.data);
    }).catch((e) => {
      setLoading(false)
      message.error("Somthing went Wrong")
    });
  }

  return (
    <>
      <Layout>
        <Layout style={{ padding: "0 24px 24px", marginTop: 100, height: "100vh" }}>
          <Content></Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
