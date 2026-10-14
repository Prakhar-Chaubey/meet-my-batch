import Header from "./components/Header";
import StudentList from "./components/StudentList";
import {students} from "./data";

function App(){

  return <div>
    <Header />
    <StudentList students = {students} />

  </div>
}
export default App;