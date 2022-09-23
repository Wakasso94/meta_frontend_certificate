const car = {
    color: "blue",
    speed: "fast",
    engine: true
}

const newCar = Object.create(car);
newCar.color = "red";
console.log("This is the new object", newCar);
console.log("This is the new object", car);

// Iterating over object AND its prototype!
for (prop in newCar) {
    console.log(prop, ":", newCar[prop]);
}
console.log("---------------------")

// Iterating over object OWN PROPERTIES only!
for (prop of Object.keys(newCar)) {
    console.log(prop, ":", newCar[prop]);
}