const express = require('express');
const app = express();
let {StrategyManager} = require('../prototype/strategy');
let {GetItem}=require('../prototype/mongodb/getItem');
let {SaveItem}=require('../prototype/mongodb/save_item');
// let Item=require('../models/item');
let cors = require('cors');
app.use(cors());

app.get('/test',async (req, res) => {
     let strategyManager=new StrategyManager();
    let getItem=new GetItem();
    strategyManager.strategy=getItem;
    let ss= await strategyManager.doAction();
    res.send({
       ss
    });
});
app.post('/test', async(req, res) => {
    let body = req.body;
//     let item = new Item({
//       name: body.name
//    });
//    return await item.save((err, itemDB) => {
//       console.log(itemDB);
//       res.send(itemDB);
//       // if (err) {
//       //     return  err;
//       // }
//       // return itemDB;
//   });
    let strategyManager=new StrategyManager();
    let saveItem=new SaveItem();
    strategyManager.strategy=saveItem;
    let result= await strategyManager.doAction(body);
    console.log(result);
    res.send(result);
});

module.exports = app;