import React, { useState }from 'react';
import Info from "../Info/Info";
//import '../../css/Checkers.css';
import axios from 'axios';

function Checkers(props) {

  axios
    .get(
      Info.proxy +
      `https://intranet.hbtn.io/correction_requests/${Info.correctionId}.json?auth_token=${Info.auth_token}`,
      { ContentType: "application/json" }
    ).then((response) => {
      if (response.status === 200) {
        Info.checks = JSON.stringify(response.data.result_display.checks);
      }
    }).catch(error => console.error(error));

  const checks = JSON.parse(Info.checks).map((item) => (
    <div className={item.passed ? "passed" : "failed"}>{item.title}</div>
  ));


  return(
     
      <div className='container-checkers'>
        {checks}
      </div>
  )
}

export default Checkers;