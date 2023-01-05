import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { HelpData } from '../assets/Help/HelpData';
import './HelpSliderStyle.css'
import {ReadOutlined} from "@ant-design/icons";
import { Typography} from "antd";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import 'animate.css';

const { Title } = Typography;

function HelpSlider() {
  return (
    <>
        <div className="head">
            <h1>SaveYt.net Download Guide</h1>
        </div>
        <div className="sliderMain animate__animated animate__fadeIn">
            <div className="slide">
                <SimpleImageSlider
                width={1096}
                height={504}
                images={HelpData}
                showBullets={true}
                showNavs={true}
                navStyle={2}
                autoPlay={true}
                slideDuration={2.5}
                autoPlayDelay={1.5}
                className="SlideComp"
                />
            </div>
        </div>
        <div className="explain">
                <Title style={{fontSize: '14px'}} level={4}>
                    <ReadOutlined className="guide" id="help"/>   Step By Step Guide To Download Youtube Videos
                </Title>
        </div>
        <ReactTooltip
            anchorId="help"
            place="top"
            content="Follow The Slides Above to Download Youtube Videos" 
        />
    </>
  )
}

export default HelpSlider