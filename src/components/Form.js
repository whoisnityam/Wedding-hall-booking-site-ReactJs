import React, { Component } from 'react';
//import axios from 'axios';

const data={}



  class Form extends Component {

  


state={
    date:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    sent:false,
    buttonText: 'Submit',

}


// handle inputs 
handleDate = (e)=>{
  this.setState({
    date:e.target.value
  })
  }

handleFirstname = (e)=>{
this.setState({
  firstname:e.target.value
})
}

handleLastname = (e)=>{
  this.setState({
    lastname:e.target.value
  })
  }

handleEmail = (e)=>{
  this.setState({
    email:e.target.value
  })
  }

handlePhone = (e)=>{
  this.setState({
    phone:e.target.value
  })
  }

// end of handle inputs





// formSubmit=(e)=>{
//   e.preventDefault();
 
 
  
//     data = {
//     date:this.state.date,
//     firstname:this.state.firstname,
//     lastname:this.state.lastname,
//     email:this.state.email,
//     phone:this.state.phone
//   }
// console.log("data");
// console.log(data);


  
  // axios.post('/api/forma',data)
  // .then(res=>{
  //   this.setState({
  //     sent:true,
  //   },this.resetForm())
  // })
  // .catch(()=>{
  //   console.log('message not send');
    
  // })
  
 
 //}

// for reseting the form data
resetForm=()=>{
  this.setState({
    date:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:''
  
  })

  setTimeout(()=>{
    this.setState({
      sent:false,
    
    

    })
  },3000)
}








    render() {
        return (
            <div className="container">
            <form onSubmit={this.formSubmit}>

            <div className="singleItem">
              <label htmlFor="date">Select Event Date:</label>
              <input type="date" name="date" className="date" value={this.state.date} onChange={this.handleDate} />
            </div>
            
            <div className="singleItem">
              <label htmlFor="firstname">First Name:</label>
              <input type="text" name="firstname" className="firstname" value={this.state.firstname} onChange={this.handleFirstname} placeholder="your firstname..." />
            </div>
      
            <div className="singleItem">
              <label htmlFor="lastname">Last Name:</label>
              <input type="text" name="lastname" className="lastname" value={this.state.lastname} onChange={this.handleLastname} placeholder="your lastname..." />
            </div>
      
            <div className="singleItem">
              <label htmlFor="email">Contact Email:</label>
              <input type="email" name="email" className="email" value={this.state.email} onChange={this.handleEmail} placeholder="your email..." required />
            </div>
      
            <div className="singleItem">
            <label htmlFor="phone">Contact Number:</label>
              <input type="number" name="phone" value={this.state.phone} placeholder="your phone number..." onChange={this.handlePhone}></input>
            </div>
      
             
             <div className={this.state.sent?'msg msgAppear':'msg'}>Message has been sent</div>
            <div className="btn">
            <button type="submit">Submit</button>
            </div>
      
      
           </form>
          </div>
        )
    }
}

export {data,Form};