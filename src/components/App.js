import React, { useState } from 'react';
import './App.css';
import { Select } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';

import { Typography } from 'antd';
import {  CheckCircleTwoTone } from '@ant-design/icons';


const { Text } = Typography;


const { Option } = Select;

const currencies = ["EUR","PLN","GBP", "SEK"];
let firstCurrency = "";
let secondCurrency = "";




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
  const [amount, setAmount] = useState("");
  const handleAmountChange = (e) => {


    
    setAmount(e.target.value)
  }
  const activeCurrencies = currencies.map(currency => <Option key = {currency}value = {currency}>{currency}</Option>)



  return (
    <div className = "main">
      <Input placeholder="Podaj kwotę" style={{ width: '25%' }} onChange={handleAmountChange} value = {amount} />


      <Select defaultValue="EUR" style={{ width: 120 }} onChange={handleChangeFirstCurrency}>
      {activeCurrencies}
      </Select>
      <Text strong > Przelicz na: </Text>
      <Select defaultValue="PLN" style={{ width: 120 }} onChange={handleChangeSecondCurrency}>
      {activeCurrencies}
      </Select>

      <Button onClick = {handleSubmit}>Przelicz <CheckCircleTwoTone twoToneColor="#52c41a" /></Button>



      <p></p>

    </div>
  );
}


export default App;
