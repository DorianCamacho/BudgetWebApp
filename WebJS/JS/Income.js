class Income extends Data{
    static IncomeCounter = 0;

    constructor(Description, Value){
        super(Description, Value);
        this._Id = ++Income.IncomeCounter;
    }
    get Id(){
        return this._Id;
    }
}