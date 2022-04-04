import React from "react";
import AcademicActivitiesBtn from "../OtherActivitiesBtn/Presentation";
import "../../../styles/AcademicTable.css";
import { Card } from "@mui/material";
function Presentation() {
  return (
    <div>
      <Card>
        <div class="AcademicTableHeader">
          <h1>Heading</h1>
          <AcademicActivitiesBtn />
        </div>
      </Card>
    </div>
  );
}

export default Presentation;
