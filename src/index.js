import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {VenueProvider} from './context'
// import  {data} from './components/Form'


ReactDOM.render(
  <VenueProvider>
  <Router>
   <App />
  </Router>,
  </VenueProvider>,

  document.getElementById('root')
);

// const express = require('express');
// const bodyParser = require("body-parser");
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// // console.log(data);

// const app=express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(cors());


// app.get('/', ()=>{
//      this.res.send('welcome to my forma');
// })

// app.post('/api/forma', (req,res)=>{

// let data=req.body;

// let Transporter = nodemailer.createTransport({
//    service:'Gmail' ,
//    auth:{
//     user:'redkernityam@gmail.com',
//     pass:"galopoula@21@21"
//    }
// });


// let mailOptions={
//     from:'redkernityam@gmail.com' ,
//     to:'nityam7rocks@gmail.com',
//     subject:`Message from ${data.firstname}`,
//     html:`
    
//     <h3>Informations</h3>
//     <ul>
//       <li>Date: ${data.date}</li>
//       <li>Name: ${data.firstname}</li>
//       <li>Lastname: ${data.lastname}</li>
//       <li>Email: ${data.email}</li>
//       <li>Phone: ${data.phone}</li>
    
//     </ul> 

    
//     `

// };

// Transporter.sendMail(mailOptions, (error, response)=>{
  
//     if(error){
//         alert(error)
//     }
//     else{
//         alert('Success')
//     }

//     Transporter.close();
// })





// })


// const PORT = process.env.PORT||3001;

// app.listen(PORT,()=>{
//     console.log(`server listening at port ${PORT}`);
    
// })
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
