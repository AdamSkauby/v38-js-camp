const isMember = true;
let shipping = 79;

if (isMember === true) {
    shipping = 0;
} else {
    console.log("Ordinarie frakt");
}
console.log(shipping);

const cities = ["Malmö", "Göteborg", "Umeå"];
console.log(cities[0]);
console.log(cities.length);

const product = { title: "Hörlurar", stock: 4, inStock: true };
console.log(product.title);
console.log(product.inStock);

for (const city of cities) {
    console.log(city);
}