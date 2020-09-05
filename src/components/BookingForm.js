import React, { Component } from 'react'
import Title from '../components/Title'
import emailjs from  'emailjs-com'

export default class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'select a date',
          firstname: 'First Name',
          lastname:'Last Name',
         contactemail: 'Email Address',
          contactno: null,
        };
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        let contactno = this.state.contactno;
        if (!Number(contactno)) {
          alert("Enter a valid Contact Number");
        }
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }

      sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('gmail', 'venue_booking', e.target, 'user_dF2Ja5ODS0qWUKSIHHOOP')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }


      render() {
        return (
          <form  onSubmit={this.mySubmitHandler && this.sendEmail}>
          <Title title="Reservation Details"/>

          <label className="booking-form-label">Select Event Date</label>
          <input type="date" name="date"/>
          <br/>
          <label className="booking-form-label">First Name </label>
          <input
            type='text'
            name='firstname'
            onChange={this.myChangeHandler}
          />
           <br/>
          <label className="booking-form-label">Last Name </label>
          <input
            type='text'
            name='lastname'
            onChange={this.myChangeHandler}
          />
           <br/>
          <label className="booking-form-label">Contact Email </label>
          <input
            type='email'
            name='contactemail'
            onChange={this.myChangeHandler}
          />
           <br/>
          <label className="booking-form-label">Contact Number</label>
          <input
            type='text'
            name='contactno'
            onChange={this.myChangeHandler}
          />
          <br/>
          <br/>
          <input type='submit' value="submit" />
          </form>
        );
      }
    }
    