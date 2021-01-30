import React,{useState} from 'react';
import './Box.css';
import { Button } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Box({value,onClick}) {
return (
        <div className="box" >
            <Button variant="contained" onClick={onClick}   className="button">
             {value} 
              
            </Button>
        </div>
    )
}

export default Box
