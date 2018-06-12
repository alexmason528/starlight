import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux'

const taxData = [
  { min: 0, max: 18200, eachDollar: 0, plus: 0 },
  { min: 18200, max: 37000, eachDollar: 0.19, plus: 0 },
  { min: 37000, max: 87000, eachDollar: 0.325, plus: 3572 },
  { min: 87000, max: 180000, eachDollar: 0.37, plus: 19822 },
  { min: 180000, max: 'Infinite', eachDollar: 0.45, plus: 54232}
]

class Result extends Component {
  generateOutput() {
    const { data: { firstname, lastname, annualSalary, superRate, period } } = this.props
    const grossIncome = annualSalary / 12;
    let incomeTax = 0;

    for (const data of taxData) {
      const { min, max, eachDollar, plus } = data
      if (max !== 'Infinite') {
        if (annualSalary >= min && annualSalary < max) {
          incomeTax = (plus + eachDollar * (annualSalary - min)) / 12
          break
        }
      }
      incomeTax = (plus + eachDollar * (annualSalary - min)) / 12
    }

    const netIncome = grossIncome - incomeTax
    const superAmount = grossIncome * superRate / 100
    const name = `${firstname} ${lastname}`

    return { name, period, grossIncome: Math.round(grossIncome), incomeTax: Math.round(incomeTax), netIncome: Math.round(netIncome), superAmount: Math.round(superAmount) }
  }

  handleGoBack = () => {
    Router.push('/')
  }

  render() {
    const { name, period, grossIncome, incomeTax, netIncome, superAmount } = this.generateOutput()
    return (
      <div className="result-table">
        <h3>Output</h3>
        <table border="1" cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <td>Name</td>
              <td>Pay period</td>
              <td>Gross Income</td>
              <td>Income Tax</td>
              <td>Net Income</td>
              <td>Super Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{period}</td>
              <td>{grossIncome}</td>
              <td>{incomeTax}</td>
              <td>{netIncome}</td>
              <td>{superAmount}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.handleGoBack}>Go Back</button>
        <style jsx>{`
          .result-table {
            position: absolute;
            left: 50%;
            top: 200px;
            transform: translate(-50%, 0);
            text-align: center;
          }

          .result-table td {
            padding: 20px;
          }

          .result-table button {
            margin: 10px 0;
            padding: 10px 20px;
            text-transform: uppercase;
            background-color: #2196f3;
            color: white;
          }
        `}
        </style>
      </div>
    )
  }
}

const selectors = (state) => {
  const { data } = state
  return { data }
}

export default connect(selectors)(Result)