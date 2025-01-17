import React from 'react'
import Employee from './Employee'


const EmployeesList = (props) =>{
    const employeesList = props.employees.map(Data =>
        <Employee key={Data.id} data={Data}/>)
    return(
        <div>
            <font size="6">Employees</font>
            <br/>
            <br/>
            {employeesList}
        </div>
    )
}
export default EmployeesList