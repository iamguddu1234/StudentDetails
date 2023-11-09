import logo from "./logo.svg";
import classes from "./App.module.css";

import StudnetDetails from "./StudentDetails";
import StudentHealthDetails from "./StudentHealthDetails";
import StudentFatherDetails from "./StudentFatherDetails";
import StudentMotherDetails from "./StudentMotherDetails";

function App() {
  return (
    <div className={classes.parent}>
      <StudnetDetails />
      <StudentHealthDetails />
      <StudentFatherDetails />
      <StudentMotherDetails />
    </div>
  );
}

export default App;
