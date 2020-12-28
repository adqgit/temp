import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import './App.css';
import { Select, Button, Input, Typography, Switch } from 'antd';
import {  CheckCircleTwoTone } from '@ant-design/icons';


const { Text } = Typography;
const { Option } = Select;

const currencies = ["EUR","PLN","GBP", "SEK", "AUD", "HUF", "RUB", "NOK", "CZK", "DKK", "CHF", "JPY"];



const Home = () => {
  const [amount, setAmount] = useState();


  const [firstCurrency, setFirstCurrency] = useState("EUR");
  const [secondCurrency, setSecondCurrency] = useState("PLN");
  const [rate, setRate] = useState("");

  const handleAmountChange = (e) => {
    
    setAmount(e.target.value)
  }



    const activeCurrencies = currencies.map(currency => <Option key = {currency}value = {currency}>{currency}</Option>)
    return (
      <>
        <Input placeholder="Podaj kwotę" style={{ width: '25%' }} onChange={handleAmountChange} value = {amount} />
        <Select defaultValue="EUR" style={{ width: 120 }} onChange={handleChangeFirstCurrency}>
            {activeCurrencies}
        </Select>
        <Text strong > Przelicz na: </Text>
        <Select defaultValue="PLN" style={{ width: 120 }} onChange={handleChangeSecondCurrency}>
           {activeCurrencies}
        </Select>

        <Button disabled = {amount === "" ? true : false} onClick = {() => handleSubmit()}>Przelicz <CheckCircleTwoTone twoToneColor="#52c41a" /></Button>

        {
            rate ? 

            <>
              <section>
                  <p>Wybrana kwota: <strong>{amount} {firstCurrency}</strong> </p>
                  <p>Aktualny kurs: <strong>{firstCurrency} / {secondCurrency}</strong> to<strong> {rate}</strong></p>
                  <p>Po przeliczeniu otrzymasz: <strong>{(amount * rate).toFixed(2)} {secondCurrency}</strong></p>
                  <p className="footer"> <a href = "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html" rel="noreferrer" target = "_blank">European Central Bank</a></p>
              </section>
            </>
             :

              <section>
                <p>Proszę podać kwotę oraz waluty.</p>
              </section>
                
        }
      </>
  )

  function handleChangeFirstCurrency(value) {

      setFirstCurrency(value);
   
    const url = `https://api.ratesapi.io/api/latest?base=${value}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data.rates[secondCurrency])
      setRate( (data.rates[secondCurrency]).toFixed(2) )


    } )
  

  }
  
  function handleChangeSecondCurrency(value) {
  
      setSecondCurrency(value);
    
    const url = `https://api.ratesapi.io/api/latest?base=${firstCurrency}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setRate( (data.rates[value]).toFixed(2) )


    } )
  
  }

 function handleSubmit()  {
    const url = `https://api.ratesapi.io/api/latest?base=${firstCurrency}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setRate( (data.rates[secondCurrency]).toFixed(2) );
 
 

    } )
  
  
  }
}




const History = () => <p>historia</p>



const Settings = () => {
  return (
    <>
      <label>Automatyczne przeliczanie: <Switch  onChange={onChange}/></label>
    </>
  )
}


function onChange(checked) {

}

function App() {
  return (
    <Router>
        <div className = "main">

          <header>
            <nav>
              <ul>
                <li><NavLink exact to="/">Main page</NavLink></li>
                <li><NavLink to="/history">History</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
              </ul>
            </nav>
          </header>
          <section>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/History" component = {History}/>
            <Route path = "/Settings" component = {Settings}/>
          </section>
        </div>
    </Router>
  );
}


export default App;
