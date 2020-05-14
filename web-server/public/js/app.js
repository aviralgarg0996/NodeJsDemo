console.log("hello JS");
getUserTemp=(location,callback)=>{
    fetch(`/weather?address=${location}`)
    .then((response) => {
        response.json().then((data)=>{
            if(data.error){
                message1.textContent='error in fetching...'
                console.log(data.error)
            }
            else{
                message1.textContent=''
                message2.textContent=`Temp in ${data.address} is ${data.data.currentTemp}`

                console.log(data)
            }
        })
    })
    .catch((err) => {
        message1.textContent='error in fetching...'
        console.log({err})
    });
}

const weatherForm= document.querySelector('form')
const search=document.querySelector('input')
const message1=document.querySelector('#message1')
const message2=document.querySelector('#message2')

message1.textContent=''
message2.textContent=''

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    message1.textContent='loading....'
    const location=search.value
    getUserTemp(location)
console.log("testing",location)
})