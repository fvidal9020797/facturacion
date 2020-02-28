const {StrategyManager}= require('../../prototype/strategy'); 
const Invoice= require('../../models/invoise');
const DetailInvoice=require('../../models/detail_invoise');
const {GetItem}=require('../../prototype/mongodb/getItem');
// import('../strategy');
 class SaveInvoice extends StrategyManager{
     async doAction(obj) {
        let invoice = new Invoice({
            name: obj.name,
            nit: obj.nit 
        });
        return await invoice.save(async(err, invoiceDB) => {
            if (err) {
                return err;
            }
            let strategyManager=new StrategyManager();
            let getAllItem=new GetItem();
            strategyManager.strategy=getAllItem;
            let listItem= await strategyManager.doAction();
            for (let index = 0; index < listItem.length; index++) {
                const element = listItem[index];
                if(index==0){
                    var detailInvoice= new DetailInvoice({
                        item:element._id,
                        invoice:invoiceDB._id,
                        price:100,
                        quantity:1,
                        total_price_quantity:100
                    });
                }else{
                    var detailInvoice= new DetailInvoice({
                        item:element._id,
                        invoice:invoiceDB._id,
                        price:100,
                        quantity:index,
                        total_price_quantity:100*index
                    });
                }
              
                detailInvoice.save(async(err, detailInvoiceDB) => {
                    if (err) {
                        return err;
                    }
                });
            }
            return invoiceDB
        });
    }
}
module.exports={
    SaveInvoice  
}