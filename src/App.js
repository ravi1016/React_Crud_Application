
import './App.css';
import EmployeeListComponent from "./components/EmployeeListComponent"
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import CreateEmployee from './components/CreateEmployee';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" element={<EmployeeListComponent/>}></Route>
          <Route path="/employees" element={<EmployeeListComponent/>}></Route>
          <Route path='/add-employee' element={<CreateEmployee/>}></Route>
          <Route path='/edit-employee/:id' element={<CreateEmployee/>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
