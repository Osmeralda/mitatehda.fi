import React, { useState } from 'react';
import * as styles from '../styles/global.css'


const Collapse =(props)=>{
    const [open, setOPen] = useState(false);

 const toggle = () => {
    setOPen(!open);
 };
    
    return (
        <div>
        <button onClick={toggle}>{props.label}</button>
        {open && (
          <div>
            {props.children}
          </div>
        )}
      </div>
    );
  };
export default Collapse;