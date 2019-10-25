// Given an object
const user = {
    name: 'Vihang',
    active: true,
    cart: [],
    purchase: []
};
// And given an item
const item = {
    name: 'Laptop',
    price: 3800
};
// Create a Amazon Shopping Cart where
// 1. Add item to the cart
// 2. Add 3% tax to the item
// 3. Add the item to purchased
// 4. Empty the cart

const compose = (f,g) => {
    console.log('Current function ---- ', g.name);
    console.log('Accumulator is ---- ', f);

    return (...args) => f(g(...args));

};
// f(g(h(i())))

const pipe = (f,g) => (...args) => g(f(...args));
// PIPE
// const pipe = (f,g) => (...args) => g(f(...args))
const purchaseItem = function(...fns) {
    return fns.reduce(compose);
};
// change the order of functinos for using PIPE addItemToCart will be first and emptyCart will be last
const finalUserObject = purchaseItem(
    emptyCart,
    buyItem,
    addTaxToItem,
    addItemToCart
)(user, item);
console.log('Final object ---- ', finalUserObject);


// const purchaseItem2 = (...fns) => fns.reduce(pipe);
//
// const finalPippedObject = purchaseItem2(
//     addItemToCart,
//     addTaxToItem,
//     buyItem,
//     emptyCart
// )(user, item);
// function purchaseItem2(...fns) {
//     return fns.reduce(pipe);
// }


// LETS CURRY the USER object into each function

const addItemToCartCurried = addItemToCart.bind(null, user);
const addTaxToItemCurried = addTaxToItem.bind(null, user);
const buyItemCurried = buyItem.bind(null, user);
const emptyCartCurried = emptyCart.bind(null, user);

const pipeFormula2 = (...fns) => item => fns.reduce((currentObject, currentFunction) => currentFunction(currentObject), item);
const RESULT = pipeFormula2(
    addItemToCartCurried,
    addTaxToItemCurried,
    buyItemCurried,
    emptyCartCurried
)(item);

//console.log('RESULT OF CURRIED FORMULA ---- ', RESULT);
//console.log('Final User Object is ---- ', finalUserObject);

//console.log('Final User Object using Pipe ------ ', finalPippedObject);
function addItemToCart(user, item){
    // DON'T PLAY WITH THE EXISTING USER OBJECT ALWAYS CREATE A NEW OBJECT ... NO SIDE EFFECTS ....
    const updatedCart = user.cart.concat(item);
    return Object.assign({}, user, { cart: updatedCart });
}
function addTaxToItem(user, item){
    const {cart} = user;
    const tax = 1.03;
    const updatedCart = cart.map(item => {
        // return a new object all together don't mess with existing object
        return {
            name: item.name,
            price : item.price * tax
        }
    });
    return Object.assign({}, user, {cart: updatedCart});
}
function buyItem(user, item){
    return Object.assign({}, user, {purchase: user.cart})
}
function emptyCart(user, item){
    return Object.assign({}, user, {cart: []});
}