import React from "react";
const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";


const classes = {
  spinner: {width: '10px'}
}
const Loading = () => (
  <div style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '30%'}}>
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;
