import React, { Component } from 'react'
import Router from 'next/router'
import {connect} from 'react-redux'
import { setData } from '../store.js'

class Index extends Component {
  handleSubmit = (evt) => {
    evt.preventDefault();
    if (!evt.target.checkValidity()) {
      return;
    }

    const data = {}
    const fields = ['firstname', 'lastname', 'annualSalary', 'superRate', 'period']

    fields.forEach(field => {
      data[field] = document.getElementsByName(field)[0].value;
    })

    this.props.setData(data)
    Router.push('/result')
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit} noValidate>
        <div className="form-group">
          <label>First Name:</label> <input type="text" name="firstname" required />
        </div>
        <div className="form-group">
          <label>Last Name:</label> <input type="text" name="lastname" required />
        </div>
        <div className="form-group">
          <label>Annual Salary:</label> <input type="number" name="annualSalary" required />
        </div>
        <div className="form-group">
          <label>Super Rate:</label> <input type="number" name="superRate" required />
        </div>
        <div className="form-group">
          <label>Payment Start Date:</label> <input type="text" name="period" required />
        </div>
        <div className="form-group">
          <button type="submit">Calculate</button>
        </div>
        <style jsx>{`
          .form {
            position: fixed;
            left: 50%;
            top: 200px;
            transform: translate(-50%, 0);
            text-align: center;
          }

          .form .form-group {
            margin: 10px 0;
          }

          .form .form-group label {
            display: inline-block;
            width: 130px;
            margin-right: 15px;
            text-align: right;
          }

          .form .form-group input {
            height: 20px;
            padding: 5px;
          }

          .form .form-group button {
            margin: 10px 0;
            padding: 10px 20px;
            text-transform: uppercase;
            background-color: #2196f3;
            color: white;
          }

          .form .form-group button:focus {
            outline: none;
            box-shadow: none;
          }

          .form .form-group input:focus {
            outline: none;
          }

          .form .form-group input:invalid {
            border: 1px solid red;
            color: red;
          }

          .form .form-group input:required::placeholder {
            color: red;
            opacity: 1;
          }          
        `}
        </style>
      </form>
    )
  }
}


const actions = {
  setData,
}

export default connect(null, actions)(Index)
