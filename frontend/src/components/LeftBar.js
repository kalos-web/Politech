import React, { useRef, useEffect, useState } from 'react';
import { slide as Menu } from "react-burger-menu";

import '../css/LeftBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import PlanStatistics from './PlanStatistics';

const LeftBar = (props) => {
    const [stateName, setStateName] = useState('')

    return (
      <div className='LeftBar'>
        {/* <Menu>
          in case we want to make the left bar collapseable https://github.com/negomi/react-burger-menu#styling
        </Menu> */}
        <div class='container'>
          <h2> {props.stateName} </h2>
          <hr/>
          <PlanStatistics/>
        </div>
      </div>
    );
} 
export default LeftBar; 