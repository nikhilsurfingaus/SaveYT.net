# <img src="https://github.com/nikhilsurfingaus/SaveYT.net/blob/master/frontend/src/assets/Logo.png" alt="drawing" height="75" width="75"/> SaveYT.net Web Application 

## Site Link: [https://saveyt.net](https://save-yt-net.netlify.app/)

## Website Powered By 

<img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="drawing" width="100"/> <img 
src="https://miro.medium.com/max/1200/1*mT9FVpEB-hAWElqMcE8hIg.jpeg" alt="drawing" height="80" width="100"/> 
<img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="drawing" width="100"/>
<img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-icon-app-logo-png-9.png" alt="drawing" width="100"/>
<img src="https://camo.githubusercontent.com/6429c650a0704c7e5aa80ee3fc7d3164385af330f0fabc5e5afd683236aebacb/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64673264677a6274342f696d6167652f75706c6f61642f76313538373037303137372f65787465726e616c5f6173736574732f6f70656e5f736f757263652f69636f6e732f646f74656e762e706e67" alt="drawing" width="100"/>
<img src="https://user-images.githubusercontent.com/16843090/101181820-f3a63780-3612-11eb-9d3a-05452f2b0ad8.png" alt="drawing" width="100"/>
<img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/j8z02ssteea4zj1k1nyz" alt="drawing" width="100"/>

- **React** Framework Library Web Application SaveYT.net enables users to download videos from Youtube in a range of video/audio formats. Includes a tutorial on how to use the web app. As well as ability to download and run the web app locally on a local server. 

- **Express Node Js** Express Js is used in the backend stack. This server enables the YTDL-Core Youtube downloading module to execute when given a URL for a Youtube video. 

- **Nodemon** is a a command-line tool that helps with the speedy development of Express Js. It monitors the project directory and automatically restarts the node application when it detects any changes. Was only use in development mode for testing, switching to node to run the EXpress Js server after deployment. 

- **YTDL-Core** YouTube downloading module. Written with only Javascript and a node-friendly streaming interface. 

- **.Env** The environmnt variables used to set different PORTS for deployment and on local running servers. For local running server PORT=4000 is constant. The .Env file for the deployed Express Js server sets this value using an Avaliabe port using PORT=process.env.PORT.

- **Axios** is a library that serves to create HTTP requests that are present externally. This includes fetching data from both the deployed backend Express Js server which returns the results of the YTDL-Core from the parsed user URL. Axios also fetches live stats for my Github profile in the Install page using the Github REST API.

- **Render Cloud** is a unified cloud to build and run all  apps and websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploys the Express Js server from the Backend Github.

## Description 
SaveYT.net provides users with the simple experience of downloading Youtube videos in a rnage of mp4/mp3 formats. 

Our website offers the following features:

- Download Youtube Vidoes mp3/mp4
- Help Section on how to download videos
- Install guide to run application on a local server

## Video Demo 
[![Watch the video](http://img.youtube.com/vi/UEgdeZbM8Zc/hqdefault.jpg)](https://youtu.be/UEgdeZbM8Zc)


## Screenshots 
<p float="left">
  <img src="https://github.com/nikhilsurfingaus/OPTokenBurnStationWeb3AppProject/blob/master/client/assets/1.png" height=45% width=45% />
  <img src="https://github.com/nikhilsurfingaus/OPTokenBurnStationWeb3AppProject/blob/master/client/assets/2.png" height=45% width=45% />
  <img src="https://github.com/nikhilsurfingaus/OPTokenBurnStationWeb3AppProject/blob/master/client/assets/3.png" height=45% width=45% />
  <img src="https://github.com/nikhilsurfingaus/OPTokenBurnStationWeb3AppProject/blob/master/client/assets/4.png" height=45% width=45% />
</p>

## Local Install
- Connect To Metamask using Transaction Context API
- Use Sanity to create or load user details and tranactions
- Deduct funds via deployed smart contract on Goreli Optimism Testnet
- Load Spinning UI
- Save Transaction to Sanity DB 
- Display Trabsaction History with TXN Hash Link to Etherscan
- Ability to refresh page

## Libraries
        "cors": "^2.8.5",
        "dotenv": "^16.0.3",
        "express": "^4.18.2",
        "nodemon": "^2.0.20",
        "ytdl-core": "^4.11.2"
        "@fortawesome/fontawesome-free": "^6.2.1",
        "@testing-library/jest-dom": "^5.16.5",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "animate.css": "^4.1.1",
        "antd": "^5.1.1",
        "axios": "^1.2.2",
        "cdbreact": "^1.5.4",
        "mdb-react-ui-kit": "^5.1.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-github-user-stats": "^1.0.9",
        "react-icons": "^4.7.1",
        "react-router-dom": "^6.6.1",
        "react-scripts": "5.0.1",
        "react-simple-image-slider": "^2.4.1",
        "react-tooltip": "^5.3.2",
        "react-ui-cards": "^3.0.2",
        "reactstrap": "^9.1.5",
        "styled-components": "^5.3.6",
        "web-vitals": "^2.1.4"

## Copyright

**Copyrights 2023, Developed by Nikhil Naik. @WaveFlightSimulation All Rights Reserved.**
