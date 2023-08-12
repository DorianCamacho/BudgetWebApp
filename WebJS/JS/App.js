const Income = [
    new income("Salary", 2100),
    new income("Sale", 1500)
];

const Outcome = [
    new outcome("Rent", 900),
    new outcome("Clothes", 400)
];

let LoadApp = () =>{
    LoadHeader();
}

let TotalIncome = () =>{
    let TotalIncome = 0;
    for (let Income of Incomes){
        TotalIncome += Income.Value;
    }
    return TotalIncome;
}

let TotalOutcome = () =>{
    let TotalOutcome = 0;
    for (let Outcome of Outcomes){
        TotalOutcome += Outcome.Value;
    }
    return TotalOutcome;
}

let LoadHeader = () =>{
    let Budget = TotalIncome() - TotalOutcome();
    let PercentOutcome = TotalOutcome()/TotalIncome();
    document.getElementById("Budget").innerHTML = Budget;
    document.getElementById("Percent").innerHTML = PercentOutcome;
    document.getElementById("Income").innerHTML = TotalIncome();
    document.getElementById("Outcome").innerHTML = TotalOutcome();
}