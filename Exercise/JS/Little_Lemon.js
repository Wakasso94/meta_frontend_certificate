function getPrice(tax, price) {
    arr= ["Italian pasta", "Rice with veggies", "Chicken with potatoes", "Vegetarian Pizza"];
    if (tax == true) {
            let total = price * 0.2;
            console.log('Dish: ${arr[i]} Price (incl.tax): $ ${total}', arr[i], total)
        }
        else {
            console.log(`Dish: ${arr[i]} Price (incl.tax): $ ${price}`)
        }
}
console.log(getPrice(true, 11.43));



// Prices with 20% tax:
// Dish: Italian pasta Price (incl.tax): $ 11.46
// Dish: Rice with veggies Price (incl.tax): $ 10.38
// Dish: Chicken with potatoes Price (incl.tax): $ 18.66
// Dish: Vegetarian Pizza Price (incl.tax): $ 7.74

// Prices without tax:
// Dish: Italian pasta Price (incl.tax): $ 9.55
// Dish: Rice with veggies Price (incl.tax): $ 8.65
// Dish: Chicken with potatoes Price (incl.tax): $ 15.55
// Dish: Vegetarian Pizza Price (incl.tax): $ 6.45