class Outcome extends Data{
    static OutcomeCounter = 0;

    constructor(Description, Value){
        super(Description, Value);
        this._Id = Outcome.OutcomeCounter;
    }
    get Id(){
        return this._Id;
    }
}