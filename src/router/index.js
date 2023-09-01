const numbersController= require ('../numbers/controller.numbers')


const router =app => {
    app.use ('/numbers', numbersController)
}

module.exports= router