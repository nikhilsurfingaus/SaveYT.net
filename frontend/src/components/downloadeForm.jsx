import React, { useState } from "react";
import { Typography, Form, Input, Button, Row, Col } from "antd";
import {DownloadOutlined, AudioMutedOutlined, InfoCircleOutlined} from "@ant-design/icons";
import Axios from "axios";
import Logo from "../assets/Logo.png"
import "./Form.css"
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'animate.css';

const { Title } = Typography;

function DownloadeForm() {
  const [form] = Form.useForm();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };

  async function submitForm(values) {
    setLoading(true);
    const data = await Axios.get(
      `http://localhost:4000/download?url=${values.url}`
    );
    setData(data);
    setLoading(false);
 }
 
 return (
    <>
      <div className="animate__animated animate__fadeIn" style={{ textAlign: "center" }}>
        <span>
            <img style={{height: "100px", width: "100px" ,color: "#FF0000", marginTop: "4rem" }} 
              src={Logo} alt="logo" />
        </span>
        <Title
          style={{
            fontWeight: "bold",
            letterSpacing: "3px",
            color: "#282828",
            marginTop: "2rem",
          }}
        >
          YouTube Video Downloader
        </Title>
        <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
          <Form form={form} name="dynamic_rule" onFinish={submitForm}>
            <Form.Item {...formItemLayout} name="url" label=" " colon={false}>
              <Input
                size="large"
                placeholder="Paste your video link"
                required={true}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<DownloadOutlined />}
                size="large"
                loading={loading}
                className="dButton"
              >
                Download
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div style={{ marginTop: "3rem" }}>
          {data !== null ? (
            <>
              <iframe
                width="570"
                height="320"
                src={`${data.data.url}`}
                title="video"
              />
              <div
                style={{
                  marginTop: "2rem",
                  paddingLeft: "10rem",
                  paddingRight: "10rem",
                }}
              >
                <Title level={5}>Avilable Formats</Title>
                <br />
                <Row gutter={[10, 20]}>
                  {data?.data.info.map((value, index) => (
                    <Col key={index} xs={24} md={4}>
                      <Button
                        download
                        className="downy"
                        href={value.url}
                        target="_self"
                        type="primary"
                        ghost
                        icon={
                          value.hasAudio === false ? (
                            <AudioMutedOutlined style={{ color: "#FF0000" }} />
                          ) : null
                        }
                      >
                        {value.mimeType.split(";")[0] + "   "}
                        {value.hasVideo ? value.height + "p" : ""}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </div>
            </>
          ) : (
            <>
              <Title style={{fontSize: '14px'}} level={4}><InfoCircleOutlined className="hovI" id="warning"/>  For Research Purposes Only</Title>
            </>
          )}
        </div>
      </div>
      <ReactTooltip
            anchorId="warning"
            place="top"
            content="Download Content Only With Peaceful Intentions" 
      />
    </>
  );
}


export default DownloadeForm;