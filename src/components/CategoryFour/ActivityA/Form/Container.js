import React, { useState } from 'react'
import Presentation from '../Form/Presentation';

function Container() {
    const[state,setState]=useState(
      {
         // date_time:'',
          nature_of_activity:'',
          place_of_activity:'',
          hours_participated:"",
      }
    )
    const handleChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    };
  return (
    <div><Presentation handleChange={handleChange} state={state}/></div>
  )
}

export default Container