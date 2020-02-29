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
        return await invoice.save().then(async(invoiceDB) => {
            console.log(invoiceDB);
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
                
                detailInvoice.save((err, detailInvoiceDB) => {
                    if (err) {
                        return err;
                    }
                });
            }
            // await DetailInvoice.find({ invoice :invoiceDB._id},(err, detailDb) => {
            //     if (err) return err;
            //     invoiceDB = { ...invoiceDB._doc, detailInvoices: detailDb };
            // });
            return invoiceDB;
        });
    }
}
module.exports={
    SaveInvoice  
}