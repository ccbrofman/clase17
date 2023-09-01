const mongoose= require ('mongoose')

const mongoConnect = async () =>{
    try {
        await mongoose.connect (
            'mongodb+srv://ccbrofman:ccbrofman@cluster0.yxct4gi.mongodb.net/?retryWrites=true&w=majority')
        console.log ('db is connected')
    }
    catch (error) {
        console.log (error) 
    }

}

module.exports= mongoConnect 