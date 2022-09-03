var express = require('express');
var router = express.Router();
var cors = require('cors')
var app = express()
var BcrpDataController = require('../controllers/BcrpData.controller')
var DollarController = require('../controllers/Dollar.controller')
// var BcrpData = new BcrpDataController 
// var Dollar = new DollarController

// app.use(cors())
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})

/* GET home page. */
router.get('/', function(req, res, next) {
 
  
  res.render('index', { title: 'Express' });
});

router.get('/dollar/month', async (req,res)=>{
    
  res.header("Access-Control-Allow-Origin", "*");
  
    let dollarData = await BcrpDataController.getMonthlyDollarPrice()
    
    res.json(dollarData)

  })
  router.get('/dollar', async (req,res)=>{
    
    res.header("Access-Control-Allow-Origin", "*");
    
      let dollarData = await BcrpDataController.getDollar()
      
      res.json(dollarData)
  
    })
  router.get('/dollar/daily/buy', async (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")

      const dollarData = await BcrpDataController.getDailyDollarPriceBuy()
      res.json(dollarData)
  })
  router.get('/dollar/daily/sale', async (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")

      const dollarData = await BcrpDataController.getDailyDollarPriceSale()
      res.json(dollarData)
  })  
  router.get('/dollar/daily/avg',async (req,res)=>{
    const dollarData = await DollarController.calculateAverage()
      res.json(dollarData)
  })
  router.get('/dollar/daily/predict', async (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*")
    const dollarData = await DollarController.predictDollar()
    res.json(dollarData)
  })
  router.get('/dollar/monthly/buy', async (req,res)=>{
    res.header('Access-Control-Allow-Origin','*')

      const dollarData = await BcrpDataController.getMonthlyDollarPriceBuy()
      res.json(dollarData)
  })
  router.get('/dollar/monthly/sale', async (req,res)=>{
      res.header('Access-Control-Allow-Origin','*')

      const dollarData = await BcrpDataController.getMonthlyDollarPriceSale()
      res.json(dollarData)
  })



  //

module.exports = router;
