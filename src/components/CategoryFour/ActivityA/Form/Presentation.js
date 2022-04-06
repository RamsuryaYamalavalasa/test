import { Box, TextField ,Button } from "@mui/material";
//36import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import React from "react";

function Presentation(props) {
  //var newValue;
   const {handleChange,state}=props;
   const [value,setValue]=React.useState(new Date())
  return (
    <div>
      <Box style={{width:'300px'}}>
        <form>
        <h3 style={{ textAlign: "center" }}>Institute with community</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ display: "flex", justifyContent: "space-between" ,margin:'20px',width:'350px'}}
          >
            <TextField
            value={state.nature_of_activity}
            label='Nature fo Activity'
            variant="standard"
            sx={{width:'200px' ,marginRight :"10px"}}
            onChange={handleChange}
            name="nature_of_activity"
            required            
            />

          <TextField
            value={state.place_of_activity}
            label='Place fo Activity'
            variant="standard"
            sx={{width:'200px' ,marginRight :"10px"}}
            onChange={handleChange}
            name="place_of_activity"
            required            
            />  
          </div>

          <div   style={{ display: "flex", justifyContent: "space-between" ,margin:'20px',width:'350px'}}>
          {/* <MobileDateTimePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          label="Date and Time"
          onError={console.log}
          minDate={new Date('2018-01-01T00:00')}
          inputFormat="yyyy/MM/dd hh:mm a"
          mask="___/__/__ __:__ _M"
          renderInput={(params) => <TextField {...params} />}
         // name="date_time"
        /> */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
         </LocalizationProvider>
          <TextField 
          style={{marginLeft:"10px"}}
          label="Hours Explained"
          type={"number"}/>
          </div>
          <div style={{marginLeft:'160px'}}>
          <Button variant="contained" sx={{width:"70px",mx:"auto"}} type='submit'>
            Submit
          </Button></div>
        </div>
      </form></Box>
    </div>
  );
}

export default Presentation;
