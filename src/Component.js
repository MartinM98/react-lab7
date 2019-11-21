import React from 'react'
import EmployeesList from './EmployeesList';
class Component extends React.Component
{    
constructor(props)
{
super(props);
this.state={
    employees:[],

}
    this.componentDidMount=this.componentDidMount.bind(this);
}
componentDidMount()
{
fetch('http://localhost:3004/employees')
.then(results=>results.json())
.then(data=>this.setState({employees:data}))
}


render()
{

   return(
    <div>
        <EmployeesList employees={this.state.employees}/>
    </div>
    )

}
}

export default Component