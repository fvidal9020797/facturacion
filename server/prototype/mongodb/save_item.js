const {StrategyManager}= require('../../prototype/strategy'); 
const Item= require('../../models/item');
 class SaveItem extends StrategyManager{
    async doAction(obj){
        let item = new Item({
            name: obj.name
        });
        let result= await item.save().then((err, itemDB)=>{
            if(err) return err;
            return itemDB;
        });
        return await result;
    } ;
}
module.exports={
    SaveItem  
}