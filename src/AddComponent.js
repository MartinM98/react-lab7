import React from 'react'
class AddComponent extends React.Component
{    
constructor(props)
{
super(props);
this.state={
    age:null,
    name:null,
    email:"",
    adult:false,
    wrong:false,
    wrong2:false,

}
this.ageHandler=this.ageHandler.bind(this);
this.nameHandler=this.nameHandler.bind(this);
this.emailHandler=this.emailHandler.bind(this);
this.SubmitClick=this.SubmitClick.bind(this);
}


ageHandler(ev)
{
  
    
   
    if(ev.target.value>=18&&this.state.adult==false)
    {
        this.setState({adult:true})
        this.setState({wrong2:false})
    }
    else if(ev.target.value<18&&this.state.adult==true)
    {
        this.setState({adult:false})
        this.setState({wrong:false})

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
    if(this.state.adult)
    {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.state.email.match(mailformat))
    {
        this.setState({wrong:false});
    }
    else
    {
        this.setState({wrong:true});
    }
}
else
{
    var phoneformat = /^[0-9]{9}$/;
    if(this.state.email.match(phoneformat))
    {
        this.setState({wrong2:false});
    }
    else
    {
        this.setState({wrong2:true});
    }
}
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
        <label hidden={!this.state.wrong} style={{color:"red"}}>{this.state.wrong?"Validation error!":null}</label>
        <label hidden={!this.state.wrong2} style={{color:"red"}}>{this.state.wrong2?"Validation error!":null}</label>
        <br/>
        <br/>
        <button onClick={this.SubmitClick}>Submit</button>
    </div>

    )

}

}

export default AddComponent