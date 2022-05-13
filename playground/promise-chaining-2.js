require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndRemove('6273ff756cacbcf4a336b309').then((task) => {
//     console.log(task)

//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {   
//     console.log(error)
// })

const deleteTaskAndAccount = async (id) => {
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({completed: false})

    return count
}   

deleteTaskAndAccount('62751dea934066908f334f1c').then((count)=>{
    console.log(count)
}).catch((error) => {   
    console.log(error)
})