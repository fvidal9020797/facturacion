class StrategyManager {
    constructor() {
        this._strategy = null;
    }
    set strategy(strategy) {
        this._strategy = strategy;
    }
    get strategy() {
        return this._strategy;
    }
    doAction() {
        this._strategy.doAction();
    }
}
class Strategy1 extends StrategyManager {
    doAction() {
        console.log('Stategy1111111111111111111111111111111');
    }
}
class Strategy2 {
    doAction() {
        console.log('Stategy2');
    }
}
module.exports={
    StrategyManager, Strategy1, Strategy2
}
