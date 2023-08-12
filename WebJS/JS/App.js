const incomes = [
    new Income("Salary", 2100),
    new Income("Sale", 1500)
];

const outcomes = [
    new Outcome("Rent", 1000),
    new Outcome("Clothes", 500)
];

let LoadApp = () =>{
    LoadHeader();
    LoadIncome();
    LoadOutcome();
}

let TotalIncome = () =>{
    let TotalIncome = 0;
    for (let Income of incomes){
        TotalIncome += Income.Value;
    }
    return TotalIncome;
}

let TotalOutcome = () =>{
    let TotalOutcome = 0;
    for (let Outcome of outcomes){
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

const LoadIncome = () =>{
    let incomeHTML = "";
    for(let Income of incomes){
        incomeHTML += CreateIncomeHTML(Income);
    }
    document.getElementById("IncomeList").innerHTML = incomeHTML;
}

const CreateIncomeHTML = (Income) =>{
    let incomeHTML = `
    <div class="Element CleanStyles">
    <div class="ElementDescription">${Income.Description}</div>
    <div class="Right CleanStyles">
        <div class="ElementValue">+ ${CurrencyFormat(Income.Value)}</div>
        <div class="ElementDelete">
            <button class="ElementDeleteButton">
                <ion-icon name="close-circle-outline" onclick="DeleteIncome(${Income.Id})"></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
    return incomeHTML
}

const DeleteIncome = (Id) =>{
    let DeleteIndex = incomes.findIndex(Income => Income.Id === Id);
    incomes.splice(DeleteIndex, 1);
    LoadHeader();
    LoadIncome();
}

const LoadOutcome = () =>{
    let OutcomeHTML = "";
    for(let Outcome of outcomes){
        OutcomeHTML += CreateOutcomeHTML(Outcome);
    }
    document.getElementById("OutcomeList").innerHTML = OutcomeHTML;
}

const CreateOutcomeHTML = (Outcome) =>{
    let PercentOutcome = Outcome.Value/TotalOutcome();
    let OutcomeHTML = `
    <div class="Element CleanStyles">
    <div class="ElementDescription">${Outcome.Description}</div>
    <div class="Right CleanStyles">
        <div class="ElementValue">${CurrencyFormat(Outcome.Value)}</div>
        <div class="ElementPercent">${PercentFormat(PercentOutcome)}</div>
        <div class="ElementDelete">
            <button class="ElementDeleteButton">
                <ion-icon name="close-circle-outline" onclick="DeleteOutcome(${Outcome.Id})"></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
    return OutcomeHTML
}

const DeleteOutcome = (Id) =>{
    let DeleteIndex = outcomes.findIndex(Outcome => Outcome.Id === Id);
    outcomes.splice(DeleteIndex, 1);
    LoadHeader();
    LoadOutcome();
}

let AddData = () =>{
    let Forms = document.forms["Forms"];
    let Type = Forms["Type"];
    let Description = Forms["Description"];
    let Value = Forms["Value"];
    if(Description.value !== "" && Value.value !== ""){
        if(Type.value === "Income"){
            incomes.push(new Income(Description.value, +Value.value));
            LoadHeader();
            LoadIncome();
        }
        else if(Type.value === "Outcome"){
            outcomes.push(new Outcome(Description.value, +Value.value));
            LoadHeader();
            LoadOutcome();
        }
    }
}