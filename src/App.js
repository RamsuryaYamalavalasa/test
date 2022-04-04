import AcademicTable from './components/Academic/AcademicTable'
import OtherActivitiesTable from './components/OtherActivities/OtherActivitiesTable'
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="collection">
        <div className='margin'>

      <AcademicTable/>
        </div>
        <div className='margin'>

      <OtherActivitiesTable/>
        </div>
      </div>
    </div>
  );
}

export default App;
