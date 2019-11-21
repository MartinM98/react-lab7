import React from 'react'
class AddComponent extends React.Component
{    
constructor(props)
{
super(props);
this.state={
    age:null,
    name:null,
    email:null,
    adult:false,

}
this.ageHandler=this.ageHandler.bind(this);
this.nameHandler=this.nameHandler.bind(this);
this.emailHandler=this.emailHandler.bind(this);
}


ageHandler(ev)
{
  
    
   
    if(ev.target.value>=18&&this.state.adult==false)
    {
        this.setState({adult:true})
    }
    else if(ev.target.value<18&&this.state.adult==true)
    {
        this.setState({adult:false})
    }
    this.setState({age:ev.target.value})
   
}
nameHandler(ev)
{
    this.setState({name:ev.target.value})
}

emailHandler(ev)
{
    this.setState({email:ev.target.value})
}


SubmitClick()
{

}


render()
{

   return(
       <div>
        <br/>
        <label>Age: </label><input type="number" min="0" onChange={this.ageHandler}/>
        <br/>
        <br/>
        <label>{this.state.adult?"Name: ":"Parent name: "}</label><input onChange={this.nameHandler}/>
        <br/>
        <br/>
        <label>{this.state.adult?"Email: ":"Parent Phone No: "}</label><input onChange={this.emailHandler}/>
        <br/>
        <br/>
        <button onClick={this.SubmitClick}>Submit</button>
    </div>

    )

}

}

export default AddComponent