var axios =  require('axios')

class BcrpDataController{
    url = (serie = 'PN01234PM') => {
        return `https://estadisticas.bcrp.gob.pe/estadisticas/series/api/${serie}/json`
    }
    async getMonthlyDollarPrice(){
        try{
            const result = await axios.get(this.url())
            let Arr = []
            result.data.periods.map(el => 
            {
                let TC = {mes: el.name, precio: Math.floor(el.values[0]*100)/100}
                Arr.push(TC)
                })
                return Arr
        }catch(error){
            console.log(error)
            return error
        }
    }
    async getDollar(){
        try{
            let result = await axios.get(this.url('PD04640PD'))
            let Arr = []
            result.data.periods.map(el => 
            {
                let TC = {dia: el.name, precio: Math.floor(el.values[0]*100)/100}
                Arr.push(TC)
                }) 
                return Arr
        }catch(error){
            console.log(error)
            return error
        }
        
    }
    async getDailyDollarPriceBuy(){
        try{
            let result = await axios.get(this.url('PD04643PD'))
            let Arr = []
            result.data.periods.map(el => 
            {
                let TC = {dia: el.name, precio: Math.floor(el.values[0]*100)/100}
                Arr.push(TC)
                }) 
                return Arr
        }catch(error){
            console.log(error)
            return error
        }
        
    }
    async getDailyDollarPriceBuyByDate(inicio,fin){
        try{let result = await axios.get(`${this.url('PD04643PD')}/${inicio}/${fin}`)
        let Arr = []
        result.data.periods.map(el => 
        {
            let TC = {dia: el.name, precio: Math.floor(el.values[0]*100)/100}
            Arr.push(TC)
            }) 
            return Arr
        }catch(error){
            console.log(error)
            return error
        }
    }
    async getDailyDollarPriceSale(){
            try{
                let result = await axios.get(this.url('PD04644PD'))
                let Arr = []
                result.data.periods.map(el => 
                {
                    let TC = {dia: el.name, precio: Math.floor(el.values[0]*100)/100}
                    Arr.push(TC)
                    }) 
                    return Arr
            }catch(error){
                    console.log(error)
                    return error
            }
    }
    async getMonthlyDollarPriceBuy(){
        try{
            let result = await axios.get(this.url('PN01205PM'))
            let Arr = []
            result.data.periods.map(el => 
            {
                let TC = {dia: el.name, precio: Math.floor(el.values[0]*100)/100}
                Arr.push(TC)
                }) 
                return Arr
        }catch(error){
            console.log(error)
            return error
        }
    }
    async getMonthlyDollarPriceSale(){
       try{
        let result = await axios.get(this.url('PN01206PM'))
        let Arr = []
        result.data.periods.map(el => 
        {
            let TC = {dia: el.name, precio: Math.floor(el.values[0]*100)/100}
            Arr.push(TC)
            }) 
            return Arr
       }catch(error){
           console.log(error)
           return error
       }
    }

}

module.exports = new BcrpDataController
