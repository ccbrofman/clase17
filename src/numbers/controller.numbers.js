const {Router} = require ('express')
const Numbers = require('../models/users.model')

const router = Router ()

router.get ('/', async (req,res) =>{
    try {
        const numbers= await Numbers.find ()

        res.json ({message: numbers}) 
    }
    catch ( error){
        res.json ({error})
    }
 
})


router.post ('/', async (req,res) =>{
    try {
    const {value} =req.body
    const numberInfo={
        value,
    }
    const newNumber = await Numbers.create  (numberInfo)
    res.json ({message: newNumber})
    }
    catch ( error){
        res.json ({error})
    }
 
})


module.exports = router