const numbers = [45, 65, 23, 98, 19];

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

for (const number of numbers) {
  console.log(number);
}

const products = [
  { id: 1, name: "Xiaomi Phone", price: 19000 },
  { id: 2, name: "iPhone", price: 19000 },
  { id: 3, name: "Mac Book Air", price: 119000 },
  { id: 4, name: "lenevo yoga laptop 2025", price: 19000 },
  { id: 5, name: "Dell XPS 13", price: 19000 },
  { id: 6, name: "Samsung S23 Ultra Phone", price: 19000 },
  { id: 7, name: "Nokia Lumia 1020 Phone", price: 19000 },
];

for (const product of products) {
  console.log(product);
}

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    // console.log(product.name.includes(search));
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProducts(products, "Phone");
console.log(result);
