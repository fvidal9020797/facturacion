const {StrategyManager}= require('../../prototype/strategy'); 
const Item= require('../../models/item');
// import('../strategy');
 class GetItem extends StrategyManager{
     async doAction() {
       return await Item.find().then((err, itemDB) => {
            if (err) {
                return  err;
            }
            return  itemDB;
        });
    }
}
module.exports={
    GetItem  
}