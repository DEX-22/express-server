const BcrpDataController = require( "./BcrpData.controller.js")
// const TensorFlow = require('@tensorflow/tfjs')
const brain = require('brain.js')

class DollarController{
    lineal(a,b,x){
        return (a*x)+b
    }
    async predictDollar(){
        const net = new brain.NeuralNetwork()   
        const data = await BcrpDataController.getDailyDollarPriceBuyByDate('2010-1-1','2022-5-30')

        const dolar = []
        const prom = []
        let count = 0
        data.map(({precio})=>{
            count++
                 dolar.push({input:[count],output:[precio/10]})
                //dolarI.push({id:count}) 
        })    

        net.train(dolar)
        //const output = net.run([349])*10
            
        for(let i = 1 ; i <= 100 ; i++){
            const output = Math.floor(net.run([i])*10000)/1000
            prom.push(output)
        }
        let total = 0
        let num = 0
        /* prom.map(el => {
            num++
            total += el
        }) */
        
        // console.log(dolar)
        return prom //total/num
    }

    async calculateAverage(){
        const data = await BcrpDataController.getDailyDollarPriceBuy()

        let total = 0
        let cantValues = 0

        data.map(({precio}) => {
              total += precio
              cantValues++
        })

        const prom = Math.floor(total*1000/cantValues)/1000

        return `promedio: ${prom}`
    }

}

module.exports = new DollarController
