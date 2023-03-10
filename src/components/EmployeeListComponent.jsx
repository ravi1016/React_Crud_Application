import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const EmployeeListComponent = () => {

  const [employees, setEmployee] = useState([]);

  useEffect(()=>{
    getAllEmployees();
  },[])

  const getAllEmployees = () =>{
    EmployeeService.getAllEmployee().then((response) =>{
        setEmployee(response.data);
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
    })
  }
  const deleteEmployee = (id) =>{
    EmployeeService.deleteEmployee(id).then((response) => {
        getAllEmployees();
    }).catch(error => {
        console.log(error);
    })
  }
  return (
    <div className="container">
    <h2 className="text-center">Employee List</h2>
    <Link to={"/add-employee"} className="btn btn-primary mb-2">Add Employee</Link>
    <table className="table table-striped table-hover">
        <thead>
            <th>Employee id</th>
            <th>Employee first Name</th>
            <th>Employee last Name</th>
            <th>Employee Email id</th>
            <th>Actions</th>
        </thead>
        <tbody>
            {employees.map(
                employee => 
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailId}</td>
                    <td>
                        <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>Update </Link>
                        <button className='btn btn-danger' style={{marginLeft:"5px"}}onClick={() => deleteEmployee(employee.id)}>Delete</button>
                    </td>
                </tr>
            )}
        </tbody>
    </table>
    </div>
  )
}

export default EmployeeListComponent