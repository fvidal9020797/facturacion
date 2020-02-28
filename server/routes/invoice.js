const express = require('express');
const app = express();
let {StrategyManager} = require('../prototype/strategy');
let {GetItem}=require('../prototype/mongodb/getItem');
let {saveItem}=require('../prototype/mongodb/save_item');
let {SaveInvoice}=require('../prototype/mongodb/save_invoice');
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
app.post('/invoice', async(req, res) => {
    let body = req.body;
    let strategyManager=new StrategyManager();
    let saveInvoice=new SaveInvoice();
    strategyManager.strategy=saveInvoice;
    let ss= await strategyManager.doAction(body);
    res.send({
       ss
    });
});

/**
 * const strateryManager = new StrategyManager();
const str1 = new Strategy1();
const str2 = new Strategy2();
strateryManager.strategy = str1;
strateryManager.doAction();

strateryManager.strategy = str2;
strateryManager.doAction();
 */
module.exports = app;