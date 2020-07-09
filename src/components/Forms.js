import React, { Component } from 'react'

export default class Forms extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Select Event Date:</label><br/>
          <input type='date'/><br/>
          <label>First Name:</label><br/>
          <input type='text'/><br/>
          <label>Last Name:</label><br/>
          <input type='text'/><br/>
          <label>Contact Email: </label><br/>
          <input type='email'/><br/>
          <label>Contact No: </label><br/>
          <input type='number'/><br/><br/>
          <input type="submit" value="SUBMIT"/>
        </form>
      </div>
    )
  }
}
