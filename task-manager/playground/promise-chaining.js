require('../src/db/mongoose')
const User=require("../src/models/user")

const updateAgeAndCount=async(id,age)=>{
    const user=await User.findByIdAndUpdate(id,{age})
    console.log({user})
    const count=await User.countDocuments({age})
    console.log({count})
}

// User.findByIdAndUpdate('5ec4174b6220e23db4d07b2f',{age:1}).then((user)=>{
// console.log({user})
// return User.countDocuments({age:1})
// }).then((count)=>{
//     console.log({count})
// }).catch((err)=>{
//     console.log({err})
// })
updateAgeAndCount('5ec4174b6220e23db4d07b2f',2)