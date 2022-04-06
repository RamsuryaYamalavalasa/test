import AcademicTable from './components/Academic/AcademicTable'
import OtherActivitiesTable from './components/OtherActivities/OtherActivitiesTable'
import ActivityTable from './components/CategoryFour/ActivityA/Table'
import ActivityTableB from './components/CategoryFour/ActivityB/Table'
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="collection">
        <h2>Category A</h2>
        <div className='margin'>

      <AcademicTable/>
        </div>
        <div className='margin'>

      <OtherActivitiesTable/>
        </div>
      <h2>Category 4 -Part A</h2>
      <div  className='margin'><ActivityTable/></div>
      <h2>Category 4 -Part B</h2>
    <div className='margin'><ActivityTableB/></div>
      </div>
    </div>
  );
}

export default App;
