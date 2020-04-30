const request=require('postman-request')
const url="http://api.weatherstack.com/current?access_key=ca1f9bf0ff77cbf2f9ed256b93cddeb9&%20query=New%20York"
request({url,json:true},(error,response)=>{
console.log("It is currently",response.body.current.temperature,'degree out.There is a ')

})