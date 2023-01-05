import React from 'react'
import { UserCard } from 'react-ui-cards';
import './InstallMain.css'
import { useEffect , useState} from 'react';
import axios from 'axios';
import {GithubFilled} from "@ant-design/icons";
import { Typography, Button} from "antd";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {DownloadOutlined} from "@ant-design/icons";
import {BsFillRecordCircleFill} from 'react-icons/bs'
import 'animate.css';


const { Title } = Typography;

function InstalllMain() {
    const [stat, setStats] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await axios(
                'https://api.github.com/users/nikhilsurfingaus',
            );
            const test = [{
                        key: '1',
                        name: 'Followers',
                        value: result.data.followers,
                    },
                    {
                        key: '2',
                        name: 'Following',
                        value: result.data.following,
                    },
                    {
                        key: '3',
                        name: 'Repos',
                        value: result.data.public_repos,
                    },   
                ]
                setStats(test)
                // console.log(stat) DELETE THIS

          }
          fetchData();

      }, []);


  return (
    <>   
        <div className="head">
            <h1>Install Program Guide</h1>
        </div>
        <div className="prof animate__animated animate__fadeIn">
            <div>
            <UserCard
                float
                header='https://miro.medium.com/max/1200/1*LEqC-7Bvmkc1zWKMfreRFQ.jpeg'
                avatar='https://i.imgur.com/n3mfmVO.png'
                name='Nikhil Naik'
                positionName= 'Github Profile'
                stats={stat}
                className="githCard"
                href='https://github.com/nikhilsurfingaus?tab=repositories'
            />
            <div className="unCard">
                <div className="notice">
                    <Title className='update' style={{fontSize: '12px'}} level={4}>
                        <BsFillRecordCircleFill className='live' id="staty"/> Stats Pulled By GitHub API
                    </Title>
                </div>

                <Title style={{fontSize: '18px'}} level={4}>
                    <GithubFilled className="guide" id="gith"/> Download SaveYT.net Now From GitHub
                </Title>
            </div>
            <div className="downPKG">
                <a href="https://github.com/nikhilsurfingaus?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <Button
                        type="primary"
                        htmlType="button"
                        icon={<DownloadOutlined />}
                        size="large"
                        className="GButton">
                            Download SaveYT.net
                    </Button>
                </a>
            </div>
        </div>

      </div>
      <ReactTooltip
            anchorId="gith"
            place="top"
            content="GitHub is a code hosting platform for version control and collaboration" 
       />
        <ReactTooltip
            anchorId="staty"
            place="top"
            content="GitHub API Provides Up-to-date GitHub user statistics" 
       />
    </>
  )
}

export default InstalllMain