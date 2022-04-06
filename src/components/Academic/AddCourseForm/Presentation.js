import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
export default function Presentation(props) {
  const { handleChange, state} = props;
  return (
    <div>
      <Box>
        <h3 style={{textAlign:'center'}}>Sessions delivered against the sessions planned(in %)</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <TextField
              id="standard-basic"
              value={state.course_code}
              label="Course Code"
              variant="standard"
              sx={{ width: "200px", marginRight: "10px" }}
              onChange={handleChange}
              name="course_code"
              required
            />
            <TextField
              id="standard-basic"
              value={state.course_name}
              label="Course Name"
              variant="standard"
              sx={{ width: "200px" }}
              onChange={handleChange}
              name="course_name"
              required
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <TextField
              id="standard-basic"
              value={state.section}
              label="Section"
              variant="standard"
              sx={{ width: "200px" }}
              onChange={handleChange}
              name="section"
              required
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={state.branch}
                  label="Branch"
                  onChange={handleChange}
                  required
                >
                  <MenuItem value='ECE'>ECE</MenuItem>
                  <MenuItem value='EEE'>EEE</MenuItem>
                  <MenuItem value='CSE'>CSE</MenuItem>
                  <MenuItem value='MECH'>MECH</MenuItem>
                  <MenuItem value='CIVIL'>CIVIL</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Sessions Planned"
              name="sessions_planned"
              type="number"
              variant="standard"
              value={state.sessions_planned}
              required
              onChange={handleChange}
              sx={{marginRight:'10px'}}
            />
            <TextField
              id="standard-basic"
              label="Sessions Delivered"
              name="sessions_delivered"
              type="number"
              variant="standard"
              value={state.sessions_delivered}
              required
              onChange={handleChange}
            />
          </div>

          <Button variant="contained" sx={{ width: "90px", mx: "auto" }}>
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
}
