const income = [
    new Income("Salary", 2100),
    new Income("Sale", 1500)
];

const outcome = [
    new Outcome("Rent", 900),
    new Outcome("Clothes", 400)
];

let LoadApp = () =>{
    LoadHeader();
}

let TotalIncome = () =>{
    let TotalIncome = 0;
    for (let Income of income){
        TotalIncome += Income.Value;
    }
    return TotalIncome;
}

let TotalOutcome = () =>{
    let TotalOutcome = 0;
    for (let Outcome of outcome){
        TotalOutcome += Outcome.Value;
    }
    return TotalOutcome;
}

let LoadHeader = () =>{
    let Budget = TotalIncome() - TotalOutcome();
    let PercentOutcome = TotalOutcome()/TotalIncome();
    document.getElementById("Budget").innerHTML = CurrencyFormat(Budget);
    document.getElementById("Percent").innerHTML = PercentFormat(PercentOutcome);
    document.getElementById("Income").innerHTML = CurrencyFormat(TotalIncome());
    document.getElementById("Outcome").innerHTML = CurrencyFormat(TotalOutcome());
}

const CurrencyFormat = (Value) =>{
    return Value.toLocaleString("en-US",{style:"currency", currency:"USD", minimumFractionDigits: 2});
}

const PercentFormat = (Value) =>{
    return Value.toLocaleString("en-US",{style:"percent", minimumFractionDigits: 2});
}