import React, { useState } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import './App.css';
import { Select, Button, Input, Typography, Switch, Tooltip, Modal } from 'antd';
import {  CheckCircleTwoTone, PushpinTwoTone  } from '@ant-design/icons';


const { Text } = Typography;
const { Option } = Select;

const currencies = ["EUR","PLN","GBP", "SEK", "AUD", "HUF", "RUB", "NOK", "CZK", "DKK", "CHF", "JPY"];
const savedQueries = [];
let id = 0; 


const Home = () => {
  const [amount, setAmount] = useState("");


  const [firstCurrency, setFirstCurrency] = useState("EUR");
  const [secondCurrency, setSecondCurrency] = useState("PLN");
  const [rate, setRate] = useState("");

  const handleAmountChange = (e) => {

    const inputValue = e.target.value;
    const validRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
    
    // if( validRegex.test(inputValue) === true ) {
    //   console.log("dobrze")
    // }else {
    //   console.log("zle")
    // }
    
    // const inputValidation = function() {
    //   return validRegex.test(inputValue);
    // } 
    // console.log(inputValidation)

    if(!!inputValue.match(/(?=.)^\$?(([1-9][0-9]{0,20}(,[0-9]{3})*)|0)?(\.[0-9]{1,2})?$/)){
      setAmount(inputValue)

    }else{
      console.log("babol")
    }
    


      

    
    // setAmount(e.target.value)
  }


    const activeFirstCurrencies = currencies.map(currency => <Option disabled = {currency === secondCurrency ? true : false}  key = {currency}value = {currency}>{currency}</Option>)
    // const activeSecondCurrencies = currencies.map(currency => currency.filter((currency) =><Option key = {currency}value = {currency}>{currency}</Option>))
    const activeSecondCurrencies = currencies.map(currency => <Option disabled = {currency === firstCurrency ? true : false} key = {currency}value = {currency}>{currency}</Option>)
    return (
      <>
        <Input placeholder="Podaj kwotę" style={{ width: '25%' }} onChange={handleAmountChange} value = {amount} />
        <Select disabled = {amount === "" ? true : false} defaultValue="EUR" style={{ width: 120 }} onChange={handleChangeFirstCurrency}>
            {activeFirstCurrencies}
        </Select>
        <Text strong > Przelicz na: </Text>
        <Select disabled = {amount === "" ? true : false} defaultValue="PLN" style={{ width: 120 }} onChange={handleChangeSecondCurrency}>
           {activeSecondCurrencies}
        </Select>

        <Button disabled = {amount === "" ? true : false} onClick = {() => handleSubmit()}>Przelicz <CheckCircleTwoTone twoToneColor="#52c41a" /></Button>

        {
            rate ? 

            <>
              <section>
                  <p>Wybrana kwota: <strong>{amount} {firstCurrency}</strong> </p>
                  <p>Aktualny kurs: <strong>{firstCurrency} / {secondCurrency}</strong> to<strong> {rate}</strong></p>
                  <p>Po przeliczeniu otrzymasz: <strong>{(amount * rate).toFixed(2)} {secondCurrency}</strong></p>

                  <Tooltip title="zapisz...">
                  <Button icon={<PushpinTwoTone />} onClick={handleSaveButton}>Zapisz</Button>
                  </Tooltip>

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


  function success() {

    Modal.success({
      content: `Zapisano: ${amount} ${firstCurrency} * ${rate} kwota: ${(amount * rate).toFixed(2)} ${secondCurrency}`,
    });
  }

  function warning() {
    Modal.warning({
      title: 'Błąd',
      content: 'Prosze podać porawna wartość...',
    });
  }

  function handleSaveButton() {
    const result = (amount * rate).toFixed(2);

    const query = {
      id,
      amount,
      firstCurrency,
      rate,
      result,
      secondCurrency
    }
    id++;
    savedQueries.push(query);
    success();
    };


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




const History = () =>  {

   return (
    
     <div className = "history">
            <ul>
                  {
                    savedQueries.map(query =>
                      <li key={query.id}>Kwota: <strong> {query.amount} {query.firstCurrency} </strong> * <strong> {query.rate}</strong> Otrzymana kwota:<strong> {query.result} {query.secondCurrency}</strong>  </li>
                    )
                  }
          </ul>
    </div>
   )
  }


const Settings = props => {
  return (
    <>
      <section><label>Pokaż / ukryj historię: <Switch checked = {props.showHistory} onChange={() => props.setShowHistory(prev => !prev)}/></label></section>
      <section><label>Pokaż / ukryj Main Page: <Switch checked = {props.showHome}   onChange={() => props.setShowHome(prev => !prev)}/></label></section>
      <section><label>Pokaż / ukryj Settings: <Switch checked = {props.showSettings}   onChange={() => props.setShowSettings(prev => !prev)}/></label></section>
    </>
  )
  
}



function App() {

  const [showHome, setShowHome] = useState(true);
  const [showHistory, setShowHistory] = useState(true);
  const [showSettings, setShowSettings] = useState(true);


  return (
    <Router basename = {process.env.PUBLIC_URL}>
        <div className = "main">

          <header>
            <nav>
              <ul className= "ulFlex">
                {showHome ? <li className = "flex"><NavLink exact to="/">Main page</NavLink></li> : null}
                {showHistory ?  <li className = "flex"><NavLink to="/history">History</NavLink></li> : null}
                {showSettings ? <li className = "flex"><NavLink to="/settings">Settings</NavLink></li> : null}
              </ul>
            </nav>
          </header>
          { showHome === false && showSettings === false ?
          <section>This exactly how Reflex works...</section>
            :
          <section>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/History" component = {History}/>
            <Route path = "/Settings" render = {() => <Settings showHome = {showHome} setShowHome = {setShowHome} showHistory = {showHistory} setShowHistory = {setShowHistory} showSettings = {showSettings} setShowSettings = {setShowSettings} />}/>
          </section>
}
        </div>
    </Router>
  );
}


export default App;
