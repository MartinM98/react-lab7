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
    flag:true,

}
this.ageHandler=this.ageHandler.bind(this);
this.nameHandler=this.nameHandler.bind(this);
this.emailHandler=this.emailHandler.bind(this);
this.SubmitClick=this.SubmitClick.bind(this);
this.Validate=this.Validate.bind(this);
}


ageHandler(ev)
{
    this.setState({age:ev.target.value})
    if(ev.target.value>=18&&this.state.adult===false)
    {

        this.setState({adult:true})
        this.setState({wrong2:false})
        this.Validate(this.state.email,!this.state.adult);
        return;
    }
    else if(ev.target.value<18&&this.state.adult===true)
    {
        this.setState({adult:false})
        this.setState({wrong:false})
        this.Validate(this.state.email,!this.state.adult);
        return;

    }
    this.Validate(this.state.email,this.state.adult);
   
}
nameHandler(ev)
{
    this.setState({name:ev.target.value})

}

emailHandler(ev)
{
    this.setState({email:ev.target.value})
    this.Validate(ev.target.value,this.state.adult);
}

Validate(value,adult)
{
    if(value==="")
    {
        this.setState({wrong:false});
        this.setState({wrong2:false});
        this.setState({flag:true});
        return;
    }
    if(adult)
    {
        this.setState({wrong2:false})
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(value.match(mailformat))
    {
        this.setState({wrong:false});
        this.setState({flag:false});
    }
    else
    {
        this.setState({wrong:true});
        this.setState({flag:true});

    }
}
else
{

    this.setState({wrong:false})
    var phoneformat = /^[0-9]{9}$/;
    if(value.match(phoneformat))
    {
        this.setState({wrong2:false});
        this.setState({flag:false});
    }
    else
    {
        this.setState({wrong2:true});
        this.setState({flag:true});
    }
}
}

SubmitClick()
{
console.log("OK");
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
        <label>{this.state.adult?"Email: ":"Parent Phone No: "}</label><input onKeyDown={this.SubmitClick} onChange={this.emailHandler}/>
        <label hidden={!this.state.wrong} style={{color:"red"}}>{this.state.wrong?"Validation error!":null}</label>
        <label hidden={!this.state.wrong2} style={{color:"red"}}>{this.state.wrong2?"Validation error!":null}</label>
        <br/>
        <br/>
        <button disabled={this.state.flag} onClick={this.SubmitClick}>Submit</button>
    </div>

    )

}

}

export default AddComponent