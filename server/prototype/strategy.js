class StrategyManager {
    constructor() {
        this._strategy = null;
        this._params=null;
    }
    set strategy(strategy) {
        this._strategy = strategy;
    }
    get strategy() {
        return this._strategy;
    }
    async doAction(obj) {
       return await this._strategy.doAction(obj);
    }
}
module.exports={
    StrategyManager
}
