import React from 'react'
import { Card } from "@mui/material";
import ActivityBtn from '../Button/Presentation'
function Presentation() {
  return (
    <div>
        <Card>
        <div class="AcademicTableHeader">
          <h2>Activites</h2>
          <ActivityBtn/>
        </div>
        </Card>
    </div>
  )
}

export default Presentation