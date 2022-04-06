import React from "react";
import { Box, TextField, Typography,Button } from "@mui/material";

function Presentation() {
  return (
    <div>
      <Box  style={{overflow :"scroll" ,display:'block',padding:'5px',height:"500px"}}>
        <form>
        <h3 style={{ textAlign: "center" }}>Other Activities</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{border:"2px"}}>
            <Typography fullWidth>Contributors to Disaster Assistance</Typography>
            <TextField variant="standard" label="support for victims..." type='number' fullWidth/>
          </div>
          <div>
            <Typography fullWidth>Community Awareness Building & Sensitisation Program </Typography>
            <TextField variant="standard" label="saving trees..." type='number' fullWidth/>
          </div>
          <div>
            <Typography>Community Awareness Building & Sensitisation Program </Typography>
            <TextField variant="standard" label="women rights & empowerment" type='number'fullWidth/>
          </div>
          <div>
            <Typography>Smart Village Project </Typography>
            <TextField variant="standard" label="Indian Green Building concept" type='number'fullWidth/>
          </div>
          <div>
            <Typography>Implementing CSR projects</Typography>
            <TextField variant="standard" label="CSR projects" type='number' fullWidth/>
          </div>
          <div>
            <Typography>Implementing social projects with UNESCO,WHO,UNICEF,UNDP...etc </Typography>
            <TextField variant="standard" label="social projects" type='number' fullWidth/>
          </div>
          <div>
            <Typography>Health Camps</Typography>
            <TextField variant="standard" label="donation camps..." type='number' fullWidth/>
          </div>
          <div>
            <Typography>Counselling sessions</Typography>
            <TextField variant="standard" label="Social sensitivity" type='number' fullWidth/>
          </div>
          <div>
            <Typography>Contributions to Swatch Bharat</Typography>
            <TextField variant="standard" label="Swatch Bharat" type='number' fullWidth/>
          </div>
          <div>
            <Typography>Mentoring Start ups</Typography>
            <TextField variant="standard" label="start_ups" type='number' fullWidth/>
          </div>
          <div>
            <Typography>Govt/non-Govt</Typography>
            <TextField variant="standard" label="Awards/Recognisations" type='number' fullWidth/>
          </div>
          <div>
            <Typography>Students Awards/Rewards</Typography>
            <TextField variant="standard" label="National or International" type='number' fullWidth/>
          </div>
        <Button style={{textAlign:"center",marginTop:'15px'}} variant="contained">Submit</Button>
        </div>
        </form>
      </Box>
    </div>
  );
}

export default Presentation;
