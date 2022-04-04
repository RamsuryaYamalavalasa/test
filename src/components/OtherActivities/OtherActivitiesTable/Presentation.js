import React from "react";
import OtherActivitiesBtn from "../OtherActivitiesBtn/Presentation";
import "../../../styles/AcademicTable.css";
import { Card } from "@mui/material";
function Presentation() {
  return (
    <div>
      <Card>
        <div class="AcademicTableHeader">
          <h2>Other Academic Activites</h2>
          <OtherActivitiesBtn />
        </div>
      </Card>
    </div>
  );
}

export default Presentation;
