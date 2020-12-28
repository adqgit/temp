import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import './App.css';
import { Select, Button, Input, Typography } from 'antd';
import {  CheckCircleTwoTone } from '@ant-design/icons';


const { Text } = Typography;
const { Option } = Select;

const currencies = ["EUR","PLN","GBP", "SEK"];
let firstCurrency = "";
let secondCurrency = "";





const Home = () => {
  const [amount, setAmount] = useState("");
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

        <Button onClick = {handleSubmit}>Przelicz <CheckCircleTwoTone twoToneColor="#52c41a" /></Button>
      </>
  )
}




const History = () => <h1>History</h1>
const Settings = () => <h1>Settings</h1>





function handleChangeFirstCurrency(value) {
  console.log(`selected ${value}`);
  firstCurrency = value;
  console.log(firstCurrency)
}

function handleChangeSecondCurrency(value) {
  console.log(`selected ${value}`);
  secondCurrency = value;
  console.log(secondCurrency)
}

const handleSubmit = () => {
  console.log("poszlo")
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
