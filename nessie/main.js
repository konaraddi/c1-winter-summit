const request = require('request')

const dataToObtain = 'customers/5a563d215eaa612c093b0b4f'
const apiKey = require('./apikey.js').apiKey
const url = 'http://api.reimaginebanking.com/' + dataToObtain + '?key=' + apiKey

request.get(url, (err, res, body) => {
    if(err){
        console.log(err)
    }else{
        let result = JSON.parse(body)
        console.log(result['address']['city'])
    }
})