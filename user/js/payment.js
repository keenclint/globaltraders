
const address =  {
    "btc": "bc1qsnj9t755tt0qqee62g2qlp3qeldc20ustmz40z",
    "tron": "TCZKkW9rT3w32nx1gejsMyNcMzs6v3ZNXw"
}

var paragraphElement = document.getElementById("addr");

const amount = localStorage.getItem("amount");
const plan = localStorage.getItem("plan");
const percent = localStorage.getItem("percent");
const time = localStorage.getItem("time");
const inputAmount = localStorage.getItem("formAmount");

var Amount = document.getElementById("amount");
var Credit = document.getElementById("credit");
var Debit = document.getElementById("debit");

if(parseInt(inputAmount) > parseInt(amount)){
    Amount.innerHTML = `$${inputAmount}`
    Credit.innerHTML = `$${inputAmount} `
    Debit.innerHTML = `$${inputAmount} `
}else{
    Amount.innerHTML = `$${amount}`
    Credit.innerHTML = `$${amount} `
    Debit.innerHTML = `$${amount} `
}


var Plan = document.getElementById("plan");
Plan.innerHTML = plan

var Percent = document.getElementById("percent");
Percent.innerHTML = `${percent}% after ${time} `

const chain = localStorage.getItem("payment")

if (chain == "btc"){
    paragraphElement.innerHTML = `BTC ADDRESS: ${address.btc}`;
}else{
    paragraphElement.innerHTML = `TRON ADDRESS: ${address.tron}`;
}