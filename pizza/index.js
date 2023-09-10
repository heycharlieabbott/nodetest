const PizzaShop = require('./pizzashop')
const DrinkMachine = require('./drinkmachine')

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();


pizzaShop.on("order",(size,topping)=>{
    console.log(`order received! baking a ${size} pizza with ${topping}`)
    drinkMachine.serveDrink(size)
})

pizzaShop.order("large","mushroom")
pizzaShop.displayOrderNumber()

// const EventEmitter = require('node:events')

// const emitter = new EventEmitter()

// emitter.on("order-pizza",(size, topping) =>{
//     console.log(`order received! baking a ${size} pizza with ${topping}`)
// })

// emitter.on("order-pizza", (size) =>{
//     if (size === 'large'){
//         console.log("Serving Complimentary Drink")
//     }
// })

// console.log('first')

// emitter.emit("order-pizza",'large','mushroom')

