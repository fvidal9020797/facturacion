const {StrategyManager}= require('../../prototype/strategy'); 
const Item= require('../../models/item');
// import('../strategy');
 class saveItem extends StrategyManager{
     async doAction(obj) {
         console.log(obj)
        let item = new Item({
            name: obj.name
        });
        return await item.save((err, itemDB) => {
            if (err) {
                return err;
            }
            return itemDB
        });
    }
}
module.exports={
    saveItem  
}