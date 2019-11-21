import React from 'react'

function Employee(props){
    return(
        <div style={{color:props.data.isActive?"green":"red"}}>
            <label style={{margin:"30px"}}>{props.data.name}</label>
             <label>{props.data.age}</label>
            <br/>
            <br/>
            
        </div>
    )
}
export default Employee