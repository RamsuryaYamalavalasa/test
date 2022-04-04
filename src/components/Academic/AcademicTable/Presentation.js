import React from "react";
import AcademicActivitiesBtn from "../AcademicButton/Presentation";
import "../../../styles/AcademicTable.css";
import { Card } from "@mui/material";
function Presentation() {
  return (
    <div>
      <Card>
        <div class="AcademicTableHeader">
          <h2>Academic Activites</h2>
          <AcademicActivitiesBtn />
        </div>
      </Card>
    </div>
  );
}

export default Presentation;
