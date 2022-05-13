require('../src/db/mongoose')

const User = require('../src/models/user')

//627408dde7a1a03f44062234

// User.findByIdAndUpdate('62740a72f59c6847715ad926', { age: 1 }).then((user) => {
//     console.log(user)

//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age: age})

    return count
}

updateAgeAndCount('62740a72f59c6847715ad926', 2).then((count)=>{
    console.log(count)
}).catch((error) => {
    console.log(error)
})