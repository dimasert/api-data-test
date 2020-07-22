import React, { Component } from 'react';
import './App.css';
import './Standart/welcome'
import Welcome from './Standart/welcome';
import Main from './Standart/main';
import LoginForm from './Standart/LoginForm';
import ApiCallData from './Standart/ApiCallData';

class App extends Component{

  constructor(props) {
    super(props)
    this.state = {
      firstName: " First Name",
      lastName: " Last Name",
      MicrosoftValue: 100,
      TwitterValue: 200,
      AmazonValue: 300,
      Values: [
        {company: "Microsoft", value: 100},
        {company: "Twitter", value: 200},
        {company: "Amazon", value: 300},
        {company: "Cisco", value: 400}
      ],
      email: '',
      password: '',
      stockData: [],
      isLogIn: false
    }
  }

  componentDidMount(){
    fetch("https://sandbox.iexapis.com/stable/ref-data/market/us/exchanges?token=Tpk_35985bfad4f14064a2f9cab4fe6c768a")
     .then(response => response.json())
     .then(response => this.setState({
       stockData: response
    }))
    //.then(response => console.log(response))

  }
  
  increaseValues(){
    this.setState((prevState) => (
      {
      MicrosoftValue: prevState.MicrosoftValue + 1,
      TwitterValue: prevState.TwitterValue + 1,
      AmazonValue: prevState.AmazonValue + 1
      }
    ))
  }
  increaseValues2(){
    this.setState((prevState) => (
      {
        Values: [
          {company: "Microsoft", value: prevState.Values[0].value + 1},
          {company: "Twitter", value: prevState.Values[1].value + 1},
          {company: "Amazon", value: prevState.Values[2].value + 1},
          {company: "Cisco", value: prevState.Values[3].value + 1}
        ]
      
      }
    ))
  }

  decreaseValues(){
    this.setState((prevState) => (
      {
      MicrosoftValue: prevState.MicrosoftValue - 1,
      TwitterValue: prevState.TwitterValue - 1,
      AmazonValue: prevState.AmazonValue - 1
      }
    ))
  }

  decreaseValues2(){
    this.setState((prevState) => (
      {
        Values: [
          {company: "Microsoft", value: prevState.Values[0].value - 1},
          {company: "Twitter", value: prevState.Values[1].value - 1},
          {company: "Amazon", value: prevState.Values[2].value - 1},
          {company: "Cisco", value: prevState.Values[3].value - 1}
        ]
      }
    ))
  }

  jumbleValues(){
    this.setState((prevState) => (
      {
      MicrosoftValue: prevState.AmazonValue + 4000,
      TwitterValue: prevState.MicrosoftValue + 2000,
      AmazonValue: prevState.TwitterValue + 1000
      }
    ))
  }
  jumbleValues2(){
    this.setState((prevState) => (
      {
        Values: [
          {company: "Microsoft", value: prevState.Values[2].value + 1000},
          {company: "Twitter", value: prevState.Values[0].value + 2000},
          {company: "Amazon", value: prevState.Values[3].value + 3000},
          {company: "Cisco", value: prevState.Values[1].value -+ 4000}
        ]
      }
    ))
  }

  handleChange(event){
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState(
      {
        [name]:value
      }
    )
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.firstName)
    console.log(this.state.lastName)
  }

  handleFormUpdate(values){
    this.setState({
      email: values.email,
      password: values.password,
      isLogIn : true
    })
  }
  render(){
    return(
      <div>Stock App Data
        <Welcome firstName={this.state.firstName} lastName={this.state.lastName}/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            First Name:
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange.bind(this)}/>
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange.bind(this)}/>
          </label>
          <button type="submit">Submit</button>
        </form>
        <Main 
          Values={this.state.Values}
          MicrosoftValue={this.state.MicrosoftValue}
          TwitterValue={this.state.TwitterValue}
          AmazonValue={this.state.AmazonValue}
          increase={this.increaseValues.bind(this)}
          decrease={this.decreaseValues.bind(this)}
          jumble={this.jumbleValues.bind(this)}
          increase2={this.increaseValues2.bind(this)}
          decrease2={this.decreaseValues2.bind(this)}
          jumble2={this.jumbleValues2.bind(this)}   
        />
        <LoginForm handleFormUpdate={this.handleFormUpdate.bind(this)} />
        {
          this.state.isLogIn ? <p>thansk for log in</p> : <p>please log in</p>
        }
        <ApiCallData stockData={this.state.stockData} />
        
      </div>
      
    )
  }
}

export default App;
